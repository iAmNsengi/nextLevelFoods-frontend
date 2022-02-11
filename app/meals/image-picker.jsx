import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  return (
    <div>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
      </div>
    </div>
  );
};

export default ImagePicker;
