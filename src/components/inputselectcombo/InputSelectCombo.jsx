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
    alert(`Input: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          ref={selectRef}
          value={selectedOptionText ? selectedOptionText : "default"}
          onChange={handleSelectChange}
          className="custom_select"
        >
          <option value="default" disabled>
            All Categories
          </option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div>
        <input type="text" ref={inputRef} value={inputValue} readOnly />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputSelectCombo;
