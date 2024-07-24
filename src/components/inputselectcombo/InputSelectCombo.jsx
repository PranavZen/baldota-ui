import React, { useRef, useState } from "react";
import "./inputSelectCombo.css";

function InputSelectCombo() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOptionText, setSelectedOptionText] = useState("");
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const handleSelectChange = (event) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    inputRef.current.value = selectedText;
    setInputValue(selectedText);
    setSelectedOptionText(selectedText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="comboInputWrap">
        {/* <select
          ref={selectRef}
          value={selectedOptionText ? selectedOptionText : "default"}
          onChange={handleSelectChange}
          className="form-select"
        >
          <option value="default" disabled>
            All Categories
          </option>
          <option value="Option 1">Fleet & Specialty Hoses</option>
          <option value="Option 2">Flange Adapters</option>
          <option value="Option 3">NPT Female Swivel (NPSM)</option>
          <option value="Option 4">Flange Components</option>
          <option value="Option 5">Flushface NPT</option>
          <option value="Option 6">Flushface - ISO 16028</option>
          <option value="Option 7">Flushface ORB</option>
          <option value="Option 8">Adapters & Fittings</option>
        </select>
        <span className="deviderLine"></span> */}
        <input
          type="text"
          ref={inputRef}
          defaultValue={inputValue}
          className="form-control"
        />
      </div>
      <button type="submit" className="searchBtn">
        Search
      </button>
    </form>
  );
}

export default InputSelectCombo;
