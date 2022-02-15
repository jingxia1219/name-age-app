import React, {useState} from 'react';

function Input(props) {
const [input,setInput] = useState("");
const changeHandler = (event) => {
    setInput(event.target.value);
}
props.inputContent(input);
    return(
        <div className='new-user__control'>
                <label>{props.inputType}</label>
                <input type='text' onChange={changeHandler}></input>
        </div>
    )
}

export default Input; 