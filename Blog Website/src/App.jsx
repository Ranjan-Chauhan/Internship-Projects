import { useState } from "react";
import BlogPage from "./components/BlogPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BlogPage />
    </>
  );
}

export default App;
