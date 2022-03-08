import React, { useRef} from 'react'

const Refer = () => {
  // const [count, setCount] = useState(0);
  // const [time, setTime] = useState(0)

  let countRef = useRef(0)
  let timeRef = useRef(0)

  const increment = () => {
    countRef.current++;
    timeRef.current++;
    console.log(countRef.current)
  }
  const decrement = () => {
    countRef.current--;
    timeRef.current++;
    console.log(countRef.current)
  }

  console.log(`Rendered ${timeRef.current}`)
  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Refer