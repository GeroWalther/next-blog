import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/gero.jpg"
          alt="An image showing Gero"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Gero</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Next.
      </p>
    </section>
  );
}
export default Hero;