import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../Utils/animation";
export default function Question() {
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
          <h1 className="text-center text-white">This is Question</h1>
        </motion.div>
      </motion.div>
    </Container>
  );
}
