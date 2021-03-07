import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';


function Index(props) {


    const [data, setData] = useState(JSON.parse(localStorage.getItem('todoData'))|| []);
    const [text, setText] = useState('');
    const [options, setOptions] = useState('');

    const handleAddListener = (text)=>{
        const todoData = [...data];
        todoData.unshift({
            text, completed: false, _id: new Date().valueOf()
        })
        updateObjectDate(todoData); 
    }

    const handleMarkComplete = (task)=>{
        const todoData = [...data];
        const index =  todoData.indexOf(task);
        todoData[index].completed = (todoData[index].completed === true) ? false : true;
        updateObjectDate(todoData);
    }

    const handleButtonText = (task)=>{
        return task.completed === true ? "Mark Done" : "Mark Undone";
    }

    const handleOptionSelection = (optionSelected)=>{
        setOptions(optionSelected);
    }

    const updateSelectedOption = ()=>{

        if(options === 'Completed') return data.filter(e => e.completed === true);
        if(options === 'Not Completed') return data.filter(e => e.completed === false);

        return data;
    }

    const updateObjectDate = (data) =>{
        setData(data);
        localStorage.setItem('todoData',JSON.stringify(data));   
    }

   
    const dataObj =  data === null ? [] : updateSelectedOption();
  
   

    return (
        
        <div>
           <div>      
            <input type = "text" onChange = {(e) => setText(e.target.value)} value = {text} />
            <button
            onClick={()=>handleAddListener(text)}>Add</button>
            <select value = {options} onChange = {(e)=>handleOptionSelection(e.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed"</option>
            </select>
           </div> 

           <div>
               <ul>

                   {dataObj.map(e =>(<li key={e._id}>{e.text}<button 
                   onClick = {()=>handleMarkComplete(e)}>{handleButtonText(e)}</button><Link to= "/Update"><button>Edit</button></Link></li>)
                   )}
               </ul>

           </div>
            
        </div>
    );
}




export default Index;