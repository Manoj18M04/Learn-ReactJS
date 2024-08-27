import { LearnComponents } from "./componenets/LearnComponents"
import { ChildComponenet } from "./componenets/ChildComponenet"
import { Student } from "./componenets/Student"
import { Header } from "./componenets/Header"
import { OneOfSample } from "./componenets/OneOfSample"
import { ArraySample } from "./componenets/ArraySample";
import { MultiTypeComponent } from "./componenets/MultiTypeComponent"

import { FunctionSample } from "./componenets/FunctionSample"

function App() {

  const items = [
    {id : 1, name : "Item1"},
    {id : 2, name : "Item2"},
    {id : 3, name : "Item3"},
  ];

  const handleClick = () => {
    alert("Button Clicked");
  }

  return (
    <> 

      <h1>Properties and PropTypes in React JS</h1>

      <LearnComponents />

      <hr />

      <Header />

      <Student name = "Manoharan" age ={50} isMarried = {true} />
      <Student name = "Eleverasi" age ={44} isMarried = {true} />
      <Student name = "Sudharsan" age ={25} isMarried = {true} />
      <Student name = "Manoj" age ={21} isMarried = {false} />
      <Student age = {15} isMarried = {false} /> 

      {/* with default parameters can set default values for missing values */}

      <hr />

      <ChildComponenet>
        <p>Sample paragraph - 1</p>
        <p>Sample Paragraph - 2</p>
        <p>Sample Paragraph - 3</p>
      </ChildComponenet>

      <hr />

      <ArraySample items = {items} />

      <hr />

      <OneOfSample color = "orange" />

      <hr />

      <MultiTypeComponent value = "Hello"/>
      <MultiTypeComponent value = {21}/>
      <MultiTypeComponent value = {true}/>

      <hr />

      <div>
        <h2>Parent Component</h2>
        <FunctionSample handleClick = {handleClick} />
      </div>

      <hr />

    </> 
  )
}

export default App


// props only gives warning but don't affect the running of the code, which is useful for the developers