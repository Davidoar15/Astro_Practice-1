import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div class="flex flex-row justify-center">
      <button
        class="border px-4 py-2 text-xl text-white"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>

      <span 
        class="text-yellow-300 text-xl ml-4 mr-4"      
      >
        {counter}
      </span>

      <button
        class="border px-4 py-2 text-xl text-white"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  );
}
