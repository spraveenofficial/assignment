import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../Utils/animation";
import "./style.css";
import question from "../../question";
import { useState } from "react";
import Options from "../Shared/render-option";
export default function Question({ onBack, onNext }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(question);
  const thisQuestion = questions.questions[currentQuestion];
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard questionmain">
          <h1 className="text-center text-white">{thisQuestion.title}</h1>
          <div className="answer-container">
            <Options options={thisQuestion.type} />
          </div>
          <div className="flex justify-between">
            <button onClick={onBack} className="btn">
              Back
            </button>
            <button onClick={onNext} className="btn">
              Next
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
