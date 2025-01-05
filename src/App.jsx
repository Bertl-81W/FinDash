/*import { useState } from 'react';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Dashboard</h1>
      </header>
      <nav className="App-nav">
        {/* Navigation items ??? */}
      </nav>
      <main>
        <section className="budget">
          <h2>Budget Tracker</h2>
          {/* Budget tracker content ??? */}
        </section>
        <section className="savings">
          <h2>Savings Goals</h2>
          {/* Savings goals ??? */}
        </section>
      </main>
    </div>
  );
}

export default App;


/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App  */
