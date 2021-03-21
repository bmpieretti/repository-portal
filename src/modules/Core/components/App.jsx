import React, { useState, useEffect } from 'react';
import GlobalStyles from './Styles';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <p>
          Page has been open for
          <code>{count}</code>
          seconds.
          <input value="Hello" />
        </p>
      </header>
    </div>
  );
}

export default App;
