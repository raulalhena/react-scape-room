import React, { useState } from "react";
import { TiEdit } from "react-icons/ti"
import { RiCloseCircleLine } from "react-icons/ri"
import { ToDoForm } from "./ToDoForm";

export interface ToDo {
    id: number;
    text: string;
}

type Props = {
    toDos: Array<ToDo>,
    removeToDo: () => void,
    updateToDo: () => void
}

export const ToDo = ({toDos, removeToDo, updateToDo}: Props) => {
    const [edit, setEdit] = useState<ToDo | unknown>({id: null, value: ''});

    const submitUpdate = (value) => {
        updateToDo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    return toDos.map((toDo: ToDo, index) =>
        <div className='toDo-row' key={index}>

            <div key={toDo.id}>
                {toDo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon'/>
                <TiEdit onClick={() => setEdit({id: toDo.id, value: toDo.text})}/>
            </div>

        </div>
    );
}
