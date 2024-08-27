import propTypes from "prop-types"

export const MultiTypeComponent = (props) => {
  return (
    <div>
        <p>The value is {props.value}</p>
    </div>
  )
}

MultiTypeComponent.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]).isRequired,
};