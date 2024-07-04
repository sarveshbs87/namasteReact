import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
const root = ReactDOM.createRoot(document.getElementById('root'));

//using JSX
//REACT element
const jsxheading = (
  <h1 className="jsxHeading" tabIndex="5">
    This is React from JSX!!!
  </h1>
);

//Functional component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

console.log(heading);
console.log(jsxheading);

//root.render(heading);
root.render(jsxheading);
