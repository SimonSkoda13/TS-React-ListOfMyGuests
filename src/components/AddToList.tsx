
import React, { useState } from 'react'
import {Istate as Props} from "../App"

interface IProps {
    people:Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList:React.FC<IProps> = ({people, setPeople}) => {
    const [input, setinput]=useState({
        name:"",
        img:"",
        note:"",
        age:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        setinput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleClick=():void=>{
        if(
            !input.name||
            !input.img||
            !input.age
        )
        {
            return
        }
        setPeople([
            ...people,
            {
                name:input.name,
                url:input.img,
                age: parseInt(input.age),
                note:input.note
            }
        ]);
        setinput({
            name:"",
            img:"",
            note:"",
            age:""
        })
    }
    
    return (
        <div className="AddToList">
            <input 
            type="text" 
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
            />
            <input 
            type="text" 
            placeholder="Age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"
            />
            <input 
            type="text" 
            placeholder="Image"
            className="AddToList-input"
            value={input.img}
            onChange={handleChange}
            name="img"
            />
            <textarea
            placeholder="Note"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}
            name="note"
            />
            <button
            className="AddToList-btn"
            onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
