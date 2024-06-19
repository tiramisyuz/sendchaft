import { useState } from "react";
import "./PageContent.css";

function PageContent(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{props.children}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}

export default PageContent;
