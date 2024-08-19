import { createSignal, type JSX } from 'solid-js';

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export default function Counter({ initValue, children }: Props): JSX.Element {
  const [counter, setCounter] = createSignal(initValue);

  return (
    <>
      {/* <h1 class='text-4xl'>Counter</h1> */}
      {children}
      <h3 class='text-xl'>Value: {counter()}</h3>

      <button
        onClick={() => setCounter((prev) => ++prev)}
        class='bg-blue-500 p-2 mr-2 rounded'
      >
        +1
      </button>

      <button
        onClick={() => setCounter((prev) => --prev)}
        class='bg-blue-500 p-2 mr-2 rounded'
      >
        -1
      </button>
    </>
  )
}
