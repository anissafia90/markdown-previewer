// App.js
import React from "react";
import "./App.css";

import { marked } from "marked";
import useLocalStorage from "./hooks/useLocalStorage";
import DocsTab from "./component/DocsTab"; // Create DocsTab component separately

const App = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "## Hello");
  const [hidePreview, setHidePreview] = React.useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const openMD = () => {
    setHidePreview(false);
  };

  const openPreview = () => {
    setHidePreview(true);
  };

  return (
    <>
      <h1>Markdown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            Markdown
          </button>
          <button onClick={openPreview} className="btn">
            Preview
          </button>
        </div>
        {hidePreview ? (
          <textarea onChange={handleChange} value={markdown} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        )}
      </div>
      <DocsTab /> {/* Render DocsTab component */}
    </>
  );
};

export default App;
