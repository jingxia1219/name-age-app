import './AddUserForm.css';
// import Input from './Input'; 
import React,{useState} from 'react'

function AddUserForm(props) {
    const submitHandler = (event)=> {
        event.preventDefault();
        if(name.length < 1) {
        alert('please anter a name');
        setAge("");
        return
        }
        props.onNewUser({name:name,age:age})
        setName("");
        setAge("");
    } 
    const [name,setName] = useState("")
    const [age, setAge] = useState("")
    const nameChangeHandler = (event)=> {
        setName(event.target.value)
    }
    const ageChangeHandler=(event)=> {
        setAge(+event.target.value)
    }
    return (
            <form className='user-input__form' onSubmit={submitHandler}> 
              <div className='new-user__control'>
                <label>{props.inputType}</label>
                <input value ={name}type='text' onChange={nameChangeHandler}></input>
        </div>
        <div className='new-user__control'>
                <label>{props.inputType}</label>
                <input min='0' max='100' value ={age} type='number' onChange={ageChangeHandler}></input>
        </div>
                <button type="submit">Add User</button>
            </form>
    )
}

export default AddUserForm;