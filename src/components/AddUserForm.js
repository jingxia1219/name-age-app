import './AddUserForm.css';
// import Input from './Input'; 
import React,{useState} from 'react'
import ErrorModal from '../UI/ErrorModal';


function AddUserForm(props) {
    const submitHandler = (event)=> {
        event.preventDefault();
        if(name.trim().length < 1 || age.trim().length < 1) {
        setInputValid(false)
        // alert('please anter a name and age');
        setAge("");
        setName("");
        return
        }
        props.onNewUser({name:name,age:+age})
        setName("");
        setAge("");
    } 
    const [inputValid,setInputValid] = useState(true)
    const [name,setName] = useState("")
    const [age, setAge] = useState("")
    const nameChangeHandler = (event)=> {
        setName(event.target.value)
    }
    const ageChangeHandler=(event)=> {
        setAge(event.target.value)
        console.log(age);
    }
    const modalCancelHandler = ()=> {
        setInputValid(true)
    }
    return (
        <div>
            { !inputValid && <ErrorModal onCancel={modalCancelHandler} title='error occured' message='Please enter a name and age between 1-100 !'/>}
         <form className='user-input__form' onSubmit={submitHandler}> 
            <div className='new-user__control'>
                <label>name</label>
                <input value ={name}type='text' onChange={nameChangeHandler}></input>
            </div>
            <div className='new-user__control'>
                    <label>age</label>
                    <input min='0' max='100' value ={age} type='number' onChange={ageChangeHandler}></input>
            </div>
                <button type="submit">Add User</button>
          </form>
        </div>
    )
}

export default AddUserForm;