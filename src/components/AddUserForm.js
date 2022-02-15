import './AddUserForm.css';
import Input from './Input'; 

function AddUserForm(props) {
    const submitHandler = (event)=> {
        event.preventDefault();
        props.onNewUser({name:userName,age:userAge})
    } 
    let userName;
    let userAge;
    const inputUserHandler = (name)=> {
        userName = name;
    }
    const inputAgeHandler=(age)=> {
        userAge = age;
    }
    console.log(userName,userAge)

    return (
            <form className='user-input__form' onSubmit={submitHandler}> 
              <Input inputType='Username' inputContent={inputUserHandler}/>
              <Input inputType='Age'inputContent={inputAgeHandler}/>
                <button type="submit">Add User</button>
            </form>
    )
}

export default AddUserForm;