import { useState } from "react";
import Greet from "../Greet";
import Question from "../Question";
import { Thanks } from "../Thanks";
export default function MainFunction() {
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
    />
  );
}
