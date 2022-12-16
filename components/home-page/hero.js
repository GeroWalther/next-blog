import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/golden.jpg"
          alt="An image showing a golden retriever"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am the programming Golden Retriever</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Next.
      </p>
    </section>
  );
}
export default Hero;
