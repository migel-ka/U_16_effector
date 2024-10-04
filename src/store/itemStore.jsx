import { createStore, createEvent } from "effector";

export const addToDo = createEvent();

export const removeToDo = createEvent();

export const toDoStore = createStore([])

 .on(addToDo, (state, todo) => [...state, todo])

 .on(removeToDo, (state, index) => state.filter((_,i)=> i !== index))
