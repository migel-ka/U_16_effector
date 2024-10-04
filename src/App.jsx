import { useState } from 'react';
import ToDoList from './components/ToDoList';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}.${month < 10 ? '0' + month : month}`;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1 className="font-sans text-4xl font-bold text-center pt-5 ">
        Список задач на {getDate()}
      </h1>
      <div className="container mx-auto w-full shadow-xl rounded-lg p-10 m-10 bg-slate-200">
       <ToDoList />
      </div>
    </main>

    
  )
}

export default App
