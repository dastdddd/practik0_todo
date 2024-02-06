import React, {useState} from 'react';
import { addTodo } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const TodoSubmit = () => {
  const [value, setValue]= useState('');
  const dispatch = useDispatch();

const handleClick=(e)=>{
  e.preventDefault()
  if(value){
    dispatch(addTodo(value))
    setValue('')
  }
  else{
    alert('empty')
  }
}



  return (
    <form onSubmit={handleClick}>
      <input 
        type="text"
        value={value} 
        placeholder='+todo'
        onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoSubmit;