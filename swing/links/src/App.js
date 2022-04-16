import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

import Data from "./data.json";

function Item(props) {
  return (
    <li>
      <a href={props.url}>{props.name}</a>
      <span>{props.description}</span>
    </li>
  );
}
function ItemBox(props) {
  return <ul>{props.items}</ul>;
}
function Legend(props) {
  return (
    <fieldset>
      <legend>{props.legendName}</legend>
      {props.itemBox}
    </fieldset>
  );
}
class Link extends React.Component {
  parse() {
    const legends = [];
    for (const data of Data.datas) {
      const lis = [];
      for (const linkData of data.linkList) {
        const l = (
          <Item
            url={linkData.url}
            name={linkData.name}
            description={linkData.description}
          />
        );
        lis.push(l);
      }
      const box = <ItemBox items={lis} />;
      const legend = <Legend legendName={data.legendName} itemBox={box} />;
      legends.push(legend);
    }
    return <div>{legends}</div>;
  }

  render() {
    const linkDatas = this.parse();
    return <div>{linkDatas}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <Link />
    </div>
  );
}

export default App;
