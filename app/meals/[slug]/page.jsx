import Image from "next/image";
import classes from "./page.module.css";

const Meal = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>

        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.cretor}>
            {" "}
            by <a href={`mailto: ${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
};

export default Meal;
