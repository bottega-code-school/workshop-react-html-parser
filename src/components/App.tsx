import * as React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="contact" path="/contact" component={Contact} />,
  <Route exact key="about" path="/about-us" component={AboutUs} />,
];

const App = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loader = (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <img
        src={require("../../static/assets/images/loader.gif")}
        alt="Loader"
      />
    </div>
  );

  return loading ? loader : <Switch>{routes}</Switch>;
};

export default App;
