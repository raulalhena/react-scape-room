import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo';

export const ToDoList = () => {
    const [toDos, setToDos] = useState(Array<ToDo>);

    const addToDo = (toDo) => {
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return;
        }

        const newToDos = [toDo, ...toDos];
        setToDos(newToDos);
        console.log(newToDos);
    }

    const removeToDo = (id) => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setToDos(prev => prev.map(item => (item.id === id ? newValue : item)))
    }

  return (
    <>
      <h1>What's your plan for today</h1>
      <ToDoForm onSubmit={addToDo}/>
      <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
    </>
  )
}
