import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

type Props = {
    onSubmit: (toDo: ToDo) => void
}

export const ToDoForm = (props: Props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit({
            id: uuid(),
            text: input
        })
        setInput('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <form className= 'toDo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a to do' value={input} name='text' className='toDo-input' onChange={handleChange}/>
            <button className='toDo-button'>Add something to do</button>
        </form>
    )
}
