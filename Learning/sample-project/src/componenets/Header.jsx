
export const Header = () => {

  let customCSS = "error";
  // let customCSS = "code";

  const isLogged = true;
  // const isLogged = false;
  
  const message = isLogged ? <p>Welcome</p> : <p>Please Log In</p>

  const items = ["Item1", "Item2", "Item3", "item4"];

  return (
    <> {/*<> --> fragment, which avoid adding of unwanted additional div tags */}
      <h1 className="head-h1">React Basics</h1>
      <p className="head-p">JSX in React JS (With Babel)</p>
      <hr />
      <p style={{fontSize: "18px"}}>  
        Javascript Expression in JSX
      </p>
      <p className={customCSS}>
        45 + 55 = {45 + 55}
      </p>
      <hr />
      <p>Conditional Rendering in JSX</p>
      <p>{message}</p>
      <hr />
      <p>JSX with List</p>
      <ul>
        {items.map((item, index) => (<li key = {index}>{item}</li>))}
      </ul>
      <hr />
    </>
  )
}

// import React from "react"

// export const Header = () => {
//   return React.createElement("div", null, React.createElement("h1", {className: "head-h1"}, "React Basics"), React.createElement("p", {className: "head-p"}, "Without Babel"))
// }