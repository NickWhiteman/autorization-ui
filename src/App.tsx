import './style/style.css';
import { useSelector } from 'react-redux';

// import { selectIsDeleteMode, selectIsOpenModal } from './store/selectors';
import { FormWindow } from './components/form-wrapper/FormWindow';

function App() {
  // const isOpen = useSelector(selectIsOpenModal);
  // const isDelete = useSelector(selectIsDeleteMode);

  return (
    <div className="App">
      <div className="app__auth">
        <FormWindow type={'update'} />
      </div>
    </div>
  );
}

export default App;
