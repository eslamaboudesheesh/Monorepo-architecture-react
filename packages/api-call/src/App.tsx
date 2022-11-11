import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { resFun } from "./serverApi";

function App() {
  const [post, setPost] = useState<any[]>([]);
  const getPost = useCallback(() => {
    resFun().then((res: any) => setPost(res));
  }, []);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{post[0]?.title}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
