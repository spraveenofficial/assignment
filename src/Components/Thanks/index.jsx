import Container from "../Container";
import animation from "../../Utils/animation";
import { motion } from "framer-motion";
import { useSurvey } from "../../Context/survey-context";
import { useEffect, useState } from "react";
export function Thanks({ startSurvey }) {
  const { state, dispatch } = useSurvey();
  const [loading, setLoading] = useState(true);

  // UseEffect to set the data in localStorage and clear the state
  useEffect(() => {
    localStorage.setItem("survey", JSON.stringify(state.selectedAnswer));
    const interval = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => {
      dispatch({ type: "RESET_SURVEY" });
      clearInterval(interval);
    };
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
        {loading ? (
          <motion.div className="logincard cardmain">
            <h1 className="text-center text-white">
              Submitting your valuable feedback...
            </h1>
          </motion.div>
        ) : (
          <motion.div className="logincard cardmain">
            <h1 className="text-center text-white">
              Thank you for sharing your opinion.
            </h1>
            <p>We will keep you posted about the latest updates.</p>
            <button
              onClick={() => startSurvey()}
              className="btn full-width mt-10 inherit-font loading-btn"
            >
              Start Survey Again.
            </button>
          </motion.div>
        )}
      </motion.div>
    </Container>
  );
}
