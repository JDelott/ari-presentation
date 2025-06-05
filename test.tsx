import React, { useState } from 'react';

let unusedVar = 'should show error'; // Should show unused variable error

function Test() {
  const [count, setCount] = useState(0);
  let anotherUnused = 'unused'; // Should show unused variable error

  undeclaredVar = 'error'; // Should show undeclared variable error

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default Test;