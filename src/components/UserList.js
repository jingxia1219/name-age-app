import './UserList.css'
import './AddUserForm';
import React, {useState} from 'react'
import AddUserForm from './AddUserForm';


function  UserList () {
    const  [curUsers,setNewUser] =useState([{id:1,
        name:'James',
        age:26
        },{id:2, name: 'Jason',age:28}]);
    // const [userName,setUserName] = useState("");
    // const [userAge,setUserAge] = useState("");
    let curId = 0;
    console.log(curUsers);
    if (curUsers.length >= 1){
        curId = curUsers[0].id-1;
    }
    console.log(curId);
    let newUser;
    const newUserHandler = (newUserObj) => {
        newUser = {id:curId,...newUserObj};
        setNewUser( (prevUsers)=>{
            return([newUser,...prevUsers])
        });
   
    }
    console.log(curUsers);
    const userDisplay = curUsers.map( user => {
        return(
            <div className='userDisplay' key={user.id}>
            <li>
                {`${user.name}, age: ${user.age}`}
            </li>
            </div>
        )
    })
    return(
        <div>
            <AddUserForm onNewUser={newUserHandler}/>
            <div>
    {userDisplay}
            </div>
        </div>
    )
}

export default UserList;