import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 className="title" tabIndex="5">
    Namaste React
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="hcomp">This is a functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

console.log(Title());
console.log(HeadingComponent());
