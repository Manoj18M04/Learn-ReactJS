import propTypes from "prop-types"

export const ChildComponenet = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

ChildComponenet.propTypes = {
    children : propTypes.array,
}