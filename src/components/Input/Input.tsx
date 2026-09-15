import './styles.css';
import { type InputProps } from './types';

function Input({name, type = "text", placeholder, label, id}: InputProps){
   return <div className='inputWrapper'>
         <label className='label' htmlFor={id}>{label}</label>
         <input  className='input' id={id} name={name} type={type} placeholder={placeholder} />
   </div>
}

export default Input;