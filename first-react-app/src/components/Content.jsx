import { useState } from "react"

function Content() {

  let [count, setCount] = useState(0)

  let add = () => {
    count = count + 1
    setCount(count)
  }

  let sub = () => {
    if(count > 0) {
        count = count - 1
        setCount(count)
    }
    else{
        console.log("Cannot sub from 0 !!!")
    }
  }

  return <>
    <h1 className="content">Count = {count}</h1>
    <button onClick={add}>Add One</button>
    <button onClick={sub}>Sub One</button>
  </>
}

export default Content