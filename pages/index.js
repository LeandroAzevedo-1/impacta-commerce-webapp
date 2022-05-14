
// import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [Count, SetCount] = useState(0);

  function increment() {
    SetCount( Count + 1)
  }

  return (
    <div>
      <p>O valor do contador é: {Count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}
