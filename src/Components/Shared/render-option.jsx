import Rating from "./rating";
export default function Options(props) {
  return (
    <>
      {props.options == "rating" && <Rating />}
      {props.options == "input" && <p>This is Input</p>}
    </>
  );
}
