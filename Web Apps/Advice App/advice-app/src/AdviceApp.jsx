/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const AdviceApp = () => {

    const [advice, setAdvice] = useState("Please click the `button` below to get advice");
    const [count, setCount] = useState(0);

    async function getAdvice () {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount(count + 1);
    }

    useEffect(function () {
        getAdvice();
    }, []);

  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count = {count} />
    </div>
  )
}


function Counter(props) {
    return(
        <p>
            You have recieved <b>{props.count}</b> pieces of advices till now.
        </p>
    )
}