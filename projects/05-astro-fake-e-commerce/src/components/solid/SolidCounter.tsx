/** @jsxImportSource solid-js */

import { createSignal, type JSX } from 'solid-js'

interface Props {
  children: JSX.Element
}

export default function SolidCounter({ children }: Props) {
  const [count, setCount] = createSignal(0)

  const add = () => setCount(count() + 1)
  const subtract = () => setCount(count() - 1)

  return (
    <div>
      <div class="counter">
        <button onClick={subtract}>
          -
        </button>

        <span>
          {count()}
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