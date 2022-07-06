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
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
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
      }}
    >
      <h2>Loading...</h2>
    </div>
  );

  return loading ? loader : <Switch>{routes}</Switch>;
};

export default App;
