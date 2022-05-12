import React, { useState } from 'react';

export default function Home() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  return (
    <div>
      <p>O valor do contador é: {count}</p>
      <button onClick={increment}>
        Incrementar
      </button>
    </div>
  );
}

 
