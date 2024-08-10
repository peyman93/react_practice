import Button from "../components/Button.tsx";
import { arrowRight } from "../../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>New</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, i) => (
            <div key={i}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
