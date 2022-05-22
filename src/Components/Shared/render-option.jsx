import Rating from "./rating";
import Input from "../Input";
export default function Options(props) {
  return (
    <>
      {props.options == "rating" && (
        <Rating hover={props.hover} rating={props.rating} />
      )}
      {props.options == "input" && <Input onChange={props.onChange} />}
    </>
  );
}
