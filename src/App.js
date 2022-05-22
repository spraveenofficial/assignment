import { motion } from "framer-motion";
import Container from "./Components/Container";
import animation from "./Utils/animation";
import "./index.css";
export default function App() {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard">
          <h1 className="text-center text-white">
            Hey, welcome to Survey Portal. 👋
          </h1>
          <button className="btn full-width mt-10 inherit-font loading-btn">
            Proceed Now
          </button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
