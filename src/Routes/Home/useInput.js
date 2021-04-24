import React, { useState, useEffect } from "react";

export const useInput = (initialvalue, validator) => {
    const [value, setValue] = useState(initialvalue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (value !== "") {
        console.log(value);
      }
    };
    return { value, onChange, handleSubmit };
  };