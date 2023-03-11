import And from "./And";

import logo from "./logo.svg";

import "./App.css";

const x = [{ name: "a" }, { name: "b" }];

const printX = (arr) =>
  arr.map(({ name }, index) => (
    <div>
      {name} - {index}
    </div>
  ));

const productCard = ({ picture, title, desc }) => {
  return (
    <div className="product">
      <img src={picture} />
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

const productArray = [
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "Red",
    desc: "c",
  },
  {
    picture:
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    title: "Dark",
    desc: "c",
  },
];

function App() {
  return (
    <div className="App">
      <And test="Hello" productArray={productArray} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.kjhgjhg
        </p>
        {printX(x)}
        {productArray.map((product) => productCard(product))}
        <div>{x.length - 1}</div>
      </header>
    </div>
  );
}

export default App;
