import { useState } from "react"

export const UserDetails = () => {

    // const [userName, setUserName] = useState("Manoj");
    // const [userAge, setUserAge] = useState(21);

    // const updateUserName = () => {
    //     userName == "Manoj" ? setUserName("Sudharsan") : setUserName("Manoj");
    // };
    // const updateUserAge = () => {
    //     userAge == 21 ? setUserAge(25) : setUserAge(21);
    // };
    
    // const [user, setUser] = useState({"name" : "Manoj", "age" : 21})

    // const updateUserName = () => {
    //     setUser({...user, name: "Sudharsan"});
    // };
    // const updateUserAge = () => {
    //     setUser({...user, age: 25});
    // };

    const [user, setUser] = useState({fname : "Manoj", lname : "Manoharan", age : 21})
    // function changeName(e) {
    //     // const newStateObject = {...user};
    //     // newStateObject.name = e.target.value;
    //     // setUser(newStateObject);
    //     setUser ((oldState) => {
    //         return {...oldState, name: e.target.value};
    //     });
    // }
    // function changeAge(e) {
    //     // const newStateObject = {...user};
    //     // newStateObject.age = e.target.value;
    //     // setUser(newStateObject);
    //     setUser ((oldState) => {
    //         return {...oldState, age: e.target.value};
    //     });
    // }
    function changeHandler(e){
        setUser({...user, [e.target.name]: e.target.value});
    }

  return (
    <div>
        {/* <h1>User Details</h1>
        <h3>Name: {userName}</h3>
        <h3>Age: {userAge}</h3>
        <button onClick={updateUserName}>Update User Age</button>
        <button onClick={updateUserAge}>Update User Age</button> */}
        
        {/* <h1>User Details</h1>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <button onClick={updateUserName}>Update User Age</button>
        <button onClick={updateUserAge}>Update User Age</button> */}
        <h2>
            {user.fname}&nbsp;{user.lname},&nbsp;{user.age}
        </h2>
        <form>
            {/* <input type="text" placeholder="Enter User Name" onChange={changeName}/>
            <input type="text" placeholder="Enter User Age" onChange={changeAge}/> */}

            <input type="text" value={user.fname} placeholder="Enter User First Name" onChange={changeHandler} name="fname" />
            <input type="text" value={user.lname} placeholder="Enter User Last Name" onChange={changeHandler} name="lname" />
            <input type="text" value={user.age} placeholder="Enter User Age" onChange={changeHandler} name="age" />
        </form>

    </div>
  )
}
