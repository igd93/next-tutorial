"use client";


import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className = "p-4 shadow-md bg-white rounded-md">
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Type your name...'
          value={inputVal}
          className="text-black"
          onChange={(e) => setInputVal(e.target.value)} />
        <button type='submit'> Predict Data </button>
      </form>
    </div>
  );
}
