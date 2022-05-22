import { useState } from "react";
import Greet from "../Greet";
import Question from "../Question";
export default function MainFunction() {
  const Steps = {
    1: Greet,
    2: Question,
  };
  const [steps, setSteps] = useState(1);
  const Step = Steps[steps];
  return <Step onNext={() => setSteps((prev) => prev + 1)} />;
}
