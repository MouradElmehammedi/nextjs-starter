"use client";

import { useCounterStore } from "@/hooks/use-counter";
import Button from "./ui/Button";

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <>
      <div className="border-4 py-8 px-6 w-80 mx-auto ">
        <h1 className="mb-5 px-4 py-2 text-gray-500 uppercase font-light">
          Counter with Zustand
        </h1>
        <div className="flex items-center justify-between">
          <Button handleOnClick={decrement}>-</Button>
          <h1 className="font-light text-6xl text-gray-500">{count}</h1>
          <Button handleOnClick={increment}>+</Button>
        </div>
        <Button
          handleOnClick={reset}
          size="text-xl"
          className="mt-5 px-4 py-2 uppercase font-light"
        >
          reset
        </Button>
      </div>
    </>
  );
}

export default Counter;
