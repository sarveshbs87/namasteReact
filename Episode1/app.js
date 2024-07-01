/* const heading = React.createElement(
  'h1',
  { id: 'heading', xys: 'abc' },
  'Hello World from React!!'
);
const aroot = ReactDOM.createRoot(document.getElementById('root'));

aroot.render(heading); //convert object to a tag
console.log(heading); //object
 */

/* <div id="parent"></div>
    <div id="child">
        <h1>I'm the H1 tag</h1>
        <h2>I'm the H2 tag</h2>
    </div>
    <div id="child2">
    <h1>I'm the second H1 tag</h1>
    <h2>I'm the second H2 tag</h2>
</div> */

//above tags are created using React as below

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm the H1 tag"),
    React.createElement('h2', {}, "I'm the H2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm the second H1 tag"),
    React.createElement('h2', {}, "I'm the second H2 tag"),
  ]),
]);

const aroot = ReactDOM.createRoot(document.getElementById('root'));

aroot.render(parent);
