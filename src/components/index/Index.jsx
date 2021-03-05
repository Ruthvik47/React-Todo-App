import React, { useState } from 'react';
import './Index.css';


function Index(props) {


    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const handleAddListener = (text)=>{
        const todoData = [...data];
        todoData.push({
            text, completed: false, _id: new Date().valueOf()
        })
        setData(todoData);

        
    }

    const dataObj = data === null ? [] : data;
    

    return (
        <div>
           <div>
               
            <input type = "text" onChange = {(e) => setText(e.target.value)} value = {text} />
            <button
            onClick={()=>handleAddListener(text)}>Add</button>
            <select >
                <option value=""></option>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed"</option>
            </select>
           </div> 

           <div>
               <ul>
                   {dataObj.map(e => <li>{e.text}</li>)}
               </ul>

           </div>
            
        </div>
    );
}




export default Index;