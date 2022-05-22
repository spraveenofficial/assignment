import { useState } from "react";
import Greet from "../Greet";
import Question from "../Question";
import { Thanks } from "../Thanks";
export default function MainFunction() {
  // This is the main function that will be called by the App.js. It is telling the flow of the app.
  const Steps = {
    1: Greet,
    2: Question,
    3: Thanks,
  };
  const [steps, setSteps] = useState(1);
  const Step = Steps[steps];
  return (
    <Step
      onBack={() => setSteps((prev) => prev - 1)}
      onNext={() => setSteps((prev) => prev + 1)}
      startSurvey={() => setSteps(1)}
    />
  );
}
