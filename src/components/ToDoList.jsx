import { addToDo, removeToDo, toDoStore } from "../store/itemStore";
import { useUnit } from "effector-react";
import { useState } from "react";

const ToDoList = () => {
   const todos = useUnit(toDoStore);
   const[inputValue, setInputValue] = useState('');
   const[descritionValue, setDescritionValue] = useState('');

   const handleAddToDo = () => {
      if (inputValue.trim() && (descritionValue.trim())) {
         addToDo({title: inputValue, descrition: descritionValue})
         setInputValue('');
         setDescritionValue('');
      }
   };

    return (
       <>
       <div className="flex justify-between md:flex-row flex-col font-mono ">
       <div className="md:w-1/2 w-full p-2 border rounded-lg border-slate-400 shadow-xl bg-slate-50 mx-4 p-4">
       <h2 className="font-black text-lg ">ДОБАВЛЕНИЕ ЗАДАЧИ</h2>
             <div className="">
                <label className="font-mono">Введите задачу</label>
                <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="rounded-lg border border-gray-400 p-2 w-full"
                placeholder="Пример:покормить рыбок"
                type="text" />
             </div>
             <div>
                <label className="font-mono">Введите описание задачи</label>
                <input 
                value={descritionValue}
                onChange={(e) => setDescritionValue(e.target.value)}
                className="rounded-lg border border-gray-400 p-2 w-full"
                placeholder="Пример:Только живым кормом"
                type="text" />
             </div>
              <button 
              className="rounded-lg my-2 p-2 w-full bg-lime-700 shadow-md hover:bg-lime-600 hover:shadow-xl cursor-pointer text-stone-50"
              onClick={handleAddToDo}>
             Добавить задачу...</button>
           </div>
          <ul className="md:w-9/12 w-full p-2 border rounded-lg border-slate-400 shadow-xl bg-slate-50 mx-4 p-4 my-2 md:my-0">
          <h2 className="font-black text-lg ">СПИСОК ЗАДАЧ</h2>
            {todos.length === 0 ? (
                  <p className="text-center text-gray-500 m-10">Сегодня задач нет, отдыхай!</p>) : (
               todos.map((todo, index)=>(
                  <li 
                  className="border-b-2 border-lime-900 flex justify-between"
                  key={index}>
                     <div>
                     <h3 className="font-black text-lg lowercase">{todo.title}</h3> 
                     <p className="indent-4">{todo.descrition}</p>
                     </div>
                  <button
                  className="rounded-lg bg-rose-700 shadow-md hover:bg-rose-600 hover:shadow-xl h-10 cursor-pointer text-stone-50 m-1"
                  onClick={() => removeToDo(index)}>Удалить</button></li>)
               ))
            }  
          </ul>
       </div>
           
       </>
    );
}

export default ToDoList;