import propTypes from "prop-types"

export const OneOfSample = (props) => {

  const {color} = props;  
  return (
    <div style={{backgroundColor: color, padding: "20px", fontSize: "20px"}}>
        <p>This Component has a background color of  {color} </p>
    </div>
  )
}

OneOfSample.propTypes = {
    color: propTypes.oneOf(["red", "green", "blue", "orange"]).isRequired,
}