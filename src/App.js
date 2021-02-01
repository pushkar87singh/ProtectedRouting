import React from "react";
import "./styles.css";
import SimpleDrawer from "./components/ToofaniCoder/SimpleDrawer";
import PhoneDrawer from "./components/ToofaniCoder/PhoneDrawer";
import ClippedDrawer from "./components/ToofaniCoder/ClippedDrawer";
import ResponsiveDrawer from "./components/ToofaniCoder/ResponsiveDrawer";
import PersistentDrawer from "./components/ToofaniCoder/PersistentDrawer";

const App = () => {
  return (
    <div className="App">
      {/*<SimpleDrawer />*/}
      {/* <PhoneDrawer /> */}
      {/* <ClippedDrawer /> */}
      {/* <ResponsiveDrawer /> */}
      <PersistentDrawer />
    </div>
  );
};

export default App;
