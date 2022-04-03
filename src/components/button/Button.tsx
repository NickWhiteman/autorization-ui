import './style/style.css';
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({
  mode,
  type,
  children,
  link,
  onClick
}) => {
  switch (mode) {
    case 'button-close':
      return (
        <button
          className='close__button'
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-link':
      return (
        <button
          className={`button${link ? `_${link}` : ''}`}
          type='button'
          onClick={onClick}>{children}</button>
      );
    case 'button-primary':
      return (
        <button
          className='button__primary'
          type={type ? type : 'button'}
          onClick={onClick}>{children}</button>
      );
    default:
      return <></>;
  };
};