import { useState } from 'react'

interface Props {
  children: JSX.Element
}

export default function ReactCounter({ children }: Props) {
  const [count, setCount] = useState(0)

  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <div>
      <div className="counter">
        <button onClick={subtract}>
          -
        </button>

        <span>
          {count}
        </span>

        <button onClick={add}>
          +
        </button>
      </div>

      <div className="counter-message">
        {children}
      </div>
    </div>
  )
}
