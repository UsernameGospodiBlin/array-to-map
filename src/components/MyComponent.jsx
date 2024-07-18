import React from 'react';
import '../utils/customMap';

const MyComponent = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);

  return (
    <div>
      <h1>Doubled Numbers</h1>
      <ul>
        {doubled.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
