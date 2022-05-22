import Container from "../Container";
import animation from "../../Utils/animation";
import { motion } from "framer-motion";
export function Thanks({ onNext }) {
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
          <h1 className="text-center text-white">
            Thank you for sharing your opinion.
          </h1>
          <p>We will keep you posted about the latest updates.</p>
          <button
            onClick={() => onNext()}
            className="btn full-width mt-10 inherit-font loading-btn"
          >
            Proceed Now
          </button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
