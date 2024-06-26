// DocsTab.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DocsTab = () => {
  const [docs, setDocs] = useState("");

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await axios.get(
          "https://www.markdownguide.org/api/v1/basic-syntax.json"
        );
        setDocs(response.data);
      } catch (error) {
        console.error("Error fetching docs:", error);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div>
      <h2>Documentation</h2>
      <div dangerouslySetInnerHTML={{ __html: docs }} />
    </div>
  );
};

export default DocsTab;
