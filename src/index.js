import React from "react";
import ReactDOM from "react-dom";
import { CharactersProvider } from "./contexts/Characters";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App2 />, document.getElementById("root"));
// ReactDOM.render(<App3 />, document.getElementById("root"));

// ReactDOM.render(
//   <CharactersProvider>
//     <App4 />
//   </CharactersProvider>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <CharactersProvider>
//     <App5 />
//   </CharactersProvider>,
//   document.getElementById("root")
// );
