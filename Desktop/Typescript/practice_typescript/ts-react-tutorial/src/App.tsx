import React from 'react';
import './App.css';
//import Counter from "./Counter";
import Greetings from './Greetings';
import MyForm from './MyForm';
//import CounterContainer from "./containers/CounterContainer";
import Counter from './components/Counter';

function App() {
  const onClick = (name : string) =>{
    console.log(`${name} says hello`)
  }
  const onSubmit = (form : { name:string; description:string }) => {
    console.log(form);
  };
 
  return (
    <div>
      <Greetings name="React" onClick={onClick}/ >
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
