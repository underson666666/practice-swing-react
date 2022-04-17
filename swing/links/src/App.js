import React from "react";
import "./App.css";
import sha512 from "js-sha512";

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
  let count = 0;
  for (const item of props.items) {
    count++;
    if (item.legendName) {
      items.push(
        <Legend
          key={count}
          legendName={item.legendName}
          itemList={item.linkList}
        />
      );
      continue;
    }

    items.push(
      <Item key={count} url={item.url} name={item.name} description={item.description} />
    );
  }

  return <ul>{items}</ul>;
}

function Legend(props) {
  return (
    <fieldset id={props.hash}>
      <legend>{props.legendName}</legend>
      <ItemBox items={props.itemList} />
    </fieldset>
  );
}

function InnerLink(props) {
  return <a href={"#" + props.hash}>{props.name}</a>;
}
function InnerLinkBox(props) {
  const l = props.links.map((data, index) => {
    return <InnerLink key={index} name={data.key} hash={data.value} />;
  });
  return <div>{l}</div>;
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      innerLinks: [],
    };
  }
  createLinks() {
    const legends = [];
    for (const data of Data.datas) {
      const hash = sha512(this.state.counter + data.legendName);
      this.state.counter++;
      this.state.innerLinks.push({ key: data.legendName, value: hash });
      const legend = (
        <Legend
          key={hash}
          hash={hash}
          legendName={data.legendName}
          itemList={data.linkList}
        />
      );
      legends.push(legend);
    }
    return <div>{legends}</div>;
  }

  createHeaders() {
    return <InnerLinkBox links={this.state.innerLinks} />;
  }

  render() {
    const linkDatas = this.createLinks();
    const headers = this.createHeaders();
    return (
      <div>
        {headers}
        {linkDatas}
      </div>
    );
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
