import "./style.css";
import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../Utils/animation";
import question from "../../question";
import { useEffect, useState } from "react";
import Options from "../Shared/render-option";
import { useSurvey } from "../../Context/survey-context";
export default function Question({ onBack, onNext }) {
  const { dispatch } = useSurvey();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(question);
  const thisQuestion = questions.questions[currentQuestion];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  // Function for handling the text input boxes.
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Function to move to next question
  const nextQuestion = () => {
    const upcomingQuestion = currentQuestion + 1;
    upcomingQuestion < questions.questions.length
      ? setCurrentQuestion(upcomingQuestion)
      : onNext();
    return setRating(0) || setHover(0) || evelAnswer();
  };

  // Function to evaluate the answer and set in the state
  const evelAnswer = () => {
    const answer = {
      id: thisQuestion.id,
      type: thisQuestion.type,
      answer: rating ? rating : text,
    };
    dispatch({ type: "SET_ANSWER", payload: answer });
  };

  // Function to go back to previous question
  const prevQuestion = () => {
    const upcomingQuestion = currentQuestion - 1;
    upcomingQuestion >= 0 ? setCurrentQuestion(upcomingQuestion) : onBack();
  };

  useEffect(() => {
    dispatch({ type: "SET_SURVEY", payload: questions.surveyId });
  }, []);

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
          <p className="text-center mb-10">
            Questions: {currentQuestion + 1}/{questions.questions.length}
          </p>
          <h1 className="text-center text-white">{thisQuestion.title}</h1>
          <div className="answer-container">
            <Options
              rating={[rating, setRating]}
              hover={[hover, setHover]}
              options={thisQuestion.type}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <button onClick={prevQuestion} className="btn">
              Back
            </button>
            <button onClick={nextQuestion} className="btn">
              Next
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
