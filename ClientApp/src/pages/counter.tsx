import React from 'react';

function Counter() {
    const [currentCount, setCurrentCount] = React.useState(0);
    return (
       <div>
        <h1>Counter</h1>

        <p>Este es un componente simple de React.</p>

        <p>Current count: <strong>{currentCount}</strong></p>

        <button className="btn-primary" onClick={() => setCurrentCount(currentCount + 1)}>Incrementar</button>
      </div>
    );
}

export default Counter;