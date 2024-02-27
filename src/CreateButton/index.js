import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateButton.css';

function CreateButton(){
    const{
        setOpenModal,
    }=React.useContext(TodoContext)
return(
    <button 
        className="CreateTodoButton" 
        onClick={(event)=> {

            console.log("Le di clic al botoncito");
            console.log(event);
            console.log(event.target);
            setOpenModal(true);
        }}
     > 
    + 
    </button>
);

}
export{CreateButton}