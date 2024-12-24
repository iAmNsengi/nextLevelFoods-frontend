"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const inputRef = useRef();

  const handlePickClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          ref={inputRef}
          type="file"
          className={classes.input}
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
