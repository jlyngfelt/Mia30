import "./InfoContainer.css";

export const InfoContainer = ({ children, color }) => {
  return (
    <div className="InfoContainer"
    backgroundColor={color}>
      {children}
    </div>
  );
};
