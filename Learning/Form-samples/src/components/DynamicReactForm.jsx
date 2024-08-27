import { useState } from "react"

export const DynamicReactForm = () => {

    const [user, setUser] = useState(
        {
            name: "Manoj",
            age: 21,
            gender: "Male",
            isMarried: false,
            country: "India",
            bio: "I am a mere human living in the planet of earth.",
        }
    );

    function changeHandler(e) {
        const name = e.target.name;
        const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user, [name] : val})
    }

  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{user.isMarried ? "Married" : "Not Married"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>{user.bio}</td>
                </tr>
            </tbody>
        </table>
        <form>
            <input type="text" name="name" placeholder="Enter your Name" value={user.name} onChange={changeHandler} />
            <input type="number" name="age" placeholder="Enter your Age" value={user.age} onChange={changeHandler} />
            <div className="gender">
                <label htmlFor="male">
                    <input type="radio" name="gender" id="male" value="Male" checked={user.gender == "Male"} onChange={changeHandler} />
                    Male
                </label>
                <label htmlFor="female">
                    <input type="radio" name="gender" id="female" value="Female" checked={user.gender == "Female"} onChange={changeHandler} />
                    Female
                </label>
            </div>
            <label htmlFor="isMarried">
                <input type="checkbox" name="isMarried" id="isMarried" checked={user.isMarried == true} onChange={changeHandler} />
                Is married
            </label>
            <div className="select-div">
                <label htmlFor="country" >Select Country : </label>
                <select name="country" id="country"value={user.country} onChange={changeHandler} >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Argentina">Argentina</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>
            <textarea name="bio" id="bio" value={user.bio} cols="30" rows="5" placeholder="Write about yourselves" />
        </form>
    </>
  )
}
