import And from "./And";
import { useState } from "react";
import logo from "./logo.svg";

import "./App.css";

import Pasha from "./Pasha";

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

let counter = 3;

function App() {
  const [text, setText] = useState("");
  const [toDoArr, setToDoArr] = useState([
    {
      id: 1,
      action: "помыть посуду",
      selected: true,
    },
    {
      id: 2,
      action: "сделать уборку",
      selected: false,
    },
  ]);

  const renderToDo = ({ id, action, selected }) => (
    <li className={selected ? "none" : ""}>
      {action}{" "}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => {
          const arr = toDoArr.map((item) => {
            if (item.id === id) {
              item.selected = !item.selected;
            }
            return item;
          });
          console.log(arr);
          setToDoArr(arr);
        }}
      />{" "}
      <button
        type="button"
        onClick={() => {
          const arr1 = toDoArr.filter((item) => item.id !== id);
          console.log(arr1);
          setToDoArr(arr1);
        }}
      >
        X
      </button>
    </li>
  );
  return (
    <div className="App">
      {/* <And test="Hello" productArray={productArray} /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pasha />
        <h1> TO DO LIST </h1>

        <input
          type="text"
          value={text}
          onChange={(e) => {
            console.log(e);
            setText(e.target.value);
          }}
        />
        <button
          tupe="button"
          onClick={() => {
            counter++;
            setToDoArr([
              ...toDoArr,
              { id: counter, action: text, selected: false },
            ]);
          }}
        >
          Add
        </button>
        <ol>{toDoArr.map((item) => renderToDo(item))}</ol>
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
