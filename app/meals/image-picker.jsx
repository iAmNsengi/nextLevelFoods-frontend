"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  const handlePickClick = () => inputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
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
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>

        {pickedImage && (
          <div className={classes.preview}>
            <Image src={pickedImage} fill />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
