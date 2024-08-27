import propTypes from "prop-types"

export const ArraySample = (props) => {
  const {items} = props;
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

ArraySample.propTypes = {
  items : propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
}