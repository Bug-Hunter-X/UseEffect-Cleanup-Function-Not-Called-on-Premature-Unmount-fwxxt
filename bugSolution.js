```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup function
    return () => {
      isMounted.current = false; 
    };
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;
    const timeoutId = setTimeout(() => {
      // Simulate an asynchronous operation
      console.log('Asynchronous operation completed');
      if (isMounted.current) {
        // Update state only if the component is still mounted
        setCount(count + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId); //Clean up timer
      console.log('Unmounted!');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```