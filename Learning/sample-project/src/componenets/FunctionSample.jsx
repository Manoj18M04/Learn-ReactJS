import propTypes from "prop-types"

export const FunctionSample = (props) => {

    const {handleClick} = props;

  return (
    <div>
        <p>This is the function componenet</p>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

FunctionSample.propTypes = {
    handleClick: propTypes.func.isRequired,
}