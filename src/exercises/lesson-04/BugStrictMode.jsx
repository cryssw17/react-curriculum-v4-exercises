// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// StrictMode runs the effect twice to simulate unmount/remount. By running the effect a 2nd time, this leads to a second setInterval being run that also increases the count by 1 every second. And this is what caused the count to increase by 2 instead of 1. The fix was to store the interval in a variable and then have a cleanup function in the useEffect that clears the first interval before starting the second one.
