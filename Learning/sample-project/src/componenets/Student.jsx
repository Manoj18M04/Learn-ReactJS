import propTypes from "prop-types"

export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMarried</th>
                <td>{props.isMarried ? "Yes" : "No"}</td>
            </tr>
        </tbody>    
        </table>
    </div>

    // <div className="student">
    //     <table>
    //         <tbody>
    //             <tr>

    //             </tr>
    //             <tr>

    //             </tr>
    //             <tr>
                    
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isMarried: propTypes.bool,
}

Student.defaultProps = {
    name : "No Name",
    age : 0,
    isMarried : false,
}