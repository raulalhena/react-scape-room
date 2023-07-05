import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { ToDo } from './ToDo'

type Props = {
    edit: any,
    onSubmit: (toDo: ToDo) => void
}

export const ToDoForm = (props: Props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit({
            id: uuid(),
            text: input
        })
        setInput('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    console.log("props edit", props.edit);
    return (
        <form className= 'toDo-form' onSubmit={handleSubmit}>
            { props.edit ? 
            
            (
                <>
                    <input type="text" placeholder='Update your item' value={input} name='text' className='toDo-input edit' onChange={handleChange}/>
                    <button className='toDo-button'>Update</button>
                </>
            )
            :
            (
                <>
                    <input type="text" placeholder='Add a to do' value={input} name='text' className='toDo-input' onChange={handleChange}/>
                    <button className='toDo-button'>Add something to do</button>
                </>
            )
            }
        </form>
    )
}
