import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Counter from "./pages/counter";
import FetchData from "./pages/fetchData";
import "./styles/App.css";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data" component={FetchData} />
    </Layout>
  );
}

export default App;
