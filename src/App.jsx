const continents = ['Africa','America','Asia','Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');
const element = (
 <div title="Outer div">
 <h1 styletyle="color:Tomato;">{message}</h1>
 </div>
);
ReactDOM.render(element, document.getElementById('content'));