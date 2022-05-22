import "./style.css";
const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="logincontainer">
        <div className="container_data">{children}</div>
      </div>
    </div>
  );
};

export default Container;
