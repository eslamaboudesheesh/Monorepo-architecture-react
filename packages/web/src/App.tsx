import "./App.css";
import { Button } from "@ie/common";
import { resFun } from "@ie/api-call";
import { useCallback, useEffect, useState } from "react";

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
      <Button textColor="red"> Hello, ClickMe </Button>
      <p>{post[0]?.title}</p>
    </div>
  );
}

export default App;
