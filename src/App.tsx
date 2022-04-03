import './style/style.css';
import { useDispatch, useSelector } from 'react-redux';

// import { selectIsDeleteMode, selectIsOpenModal } from './store/selectors';
import { FormWindow } from './form-wrapper/FormWindow';
import { Button } from './components/button/Button';
import { authAction } from './store/reducer';
import { TypeForm } from './store/types';
import { selectAuthUser, selectTypeForm } from './store/selectors';

function App() {
  const dispatch = useDispatch();
  const typeForm = useSelector(selectTypeForm)
  const authUser = useSelector(selectAuthUser);

  const singUp: TypeForm = {
    type: 'singUp'
  }
  const singIn: TypeForm = {
    type: 'singIn'
  }
  const getSingUp = () => {
    dispatch(authAction.typeForm(singUp))
  };
  const getLogIn = () => {
    dispatch(authAction.typeForm(singIn))
  };

  return (
    <div className="App">
      <div className="header__block">
        {
          authUser && typeForm === 'update' 
            ? <div className="auth_user">{authUser.login}</div> 
            : (
                typeForm === 'singIn' &&
                <Button 
                  mode={'button-primary'} 
                  children={'Sing up'}
                  type='button'
                  onClick={() => getSingUp()}/>
              ) || (
              
                typeForm === 'singUp' &&
                <Button 
                  mode={'button-primary'} 
                  children={'Sing In'}
                  type='button'
                  onClick={() => getLogIn()}/>
              )
        }
      </div>
      <div className="app__body">
        <div className="app__auth">
          <FormWindow />
          {
            authUser.login &&
              <div className="auth__page">{`ВЫ АВТОРИЗОВАЛИСЬ ${authUser.login}`}</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
