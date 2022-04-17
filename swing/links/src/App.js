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
  const items = [];
  for (const item of props.items) {
    if (item.legendName) {
      items.push(
        <Legend legendName={item.legendName} itemList={item.linkList} />
      );
      continue;
    }

    items.push(
      <Item url={item.url} name={item.name} description={item.description} />
    );
  }

  return <ul>{items}</ul>;
}

function Legend(props) {
  return (
    <fieldset>
      <legend>{props.legendName}</legend>
      <ItemBox items={props.itemList} />
    </fieldset>
  );
}

class Link extends React.Component {
  createLinks() {
    const legends = [];
    for (const data of Data.datas) {
      const legend = (
        <Legend legendName={data.legendName} itemList={data.linkList} />
      );
      legends.push(legend);
    }
    return <div>{legends}</div>;
  }

  render() {
    const linkDatas = this.createLinks();
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
