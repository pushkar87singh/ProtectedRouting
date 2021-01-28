import React from "react";
import ReactDOM from "react-dom";
//import { LandingPage } from "./landing.page";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { AppLayout } from "./app.layout";
//import { ProtectedRoute } from "./protected.route";
import App from "./app";
import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <TemporaryDrawer />
//       <Switch>
//         <Route exact path="/" component={LandingPage}></Route>
//         <ProtectedRoute exact path="/app" component={AppLayout} />
//         <Route path="*" component={() => "404 Not Found"} />
//       </Switch>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  //<BrowserRouter>
  <App />,
  //</BrowserRouter>,
  rootElement
);
