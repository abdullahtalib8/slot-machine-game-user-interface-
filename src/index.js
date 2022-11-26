// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(<App />,document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import myFav,{ favProg ,myNames,yourNames} from './App'
// import * as ques from "./App"

// import React from 'react'
// import App from './App'
// import ReactDOM from "react-dom";

// ReactDOM.render
// (<App/>,document.getElementById('root'))

// Netflix

import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map((CurVal) => {
      return (
        <Card
          imgsrc={CurVal.imgscr}
          title={CurVal.title}
          sname={CurVal.sname}
          link={CurVal.links}
        />
      );
    })}
  </>
);
