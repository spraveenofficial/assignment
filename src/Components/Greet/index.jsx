import { motion } from "framer-motion";
import Container from "../Container";
import animation from "../../Utils/animation";
import "./style.css";
export default function Greet({ onNext }) {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard cardmain">
          <h1 className="text-center text-white">Hey, welcome to Survey. 👋</h1>
          <p>
            This is the Official survey website. Where user can share there
            opinion to help us grow.
          </p>
          <button
            onClick={() => onNext()}
            className="btn full-width mt-10 inherit-font loading-btn"
          >
            Proceed Now
          </button>
          <button className="btn btn-primary full-width mt-10 inherit-font loading-btn">
            Not Interested
          </button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
