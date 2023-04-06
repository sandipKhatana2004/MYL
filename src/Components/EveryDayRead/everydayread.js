import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EDR = () => {
  const [value, setValue] = useState({});
  return (
    <form>
      <input className="" />
      <ReactQuill theme="snow" onChange={setValue} />;
    </form>
  );
};

export default EDR;
