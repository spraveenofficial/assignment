import "./style.css";
export default function Input(props, ...rest) {
  return (
    <textarea
      type="text"
      placeholder="Enter Your Valuable Feedback"
      className="input-main"
      {...rest}
      onChange={props.onChange}
    />
  );
}
