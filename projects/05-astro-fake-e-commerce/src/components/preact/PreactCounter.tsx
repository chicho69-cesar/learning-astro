/** @jsxImportSource preact */

import { useState } from 'preact/hooks'

interface Props {
  children: JSX.Element
}

export default function PreactCounter({ children }: Props) {
  const [count, setCount] = useState(0)

  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <div>
      <div class="counter">
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

      <div class="counter-message">
        {children}
      </div>
    </div>
  )
}
