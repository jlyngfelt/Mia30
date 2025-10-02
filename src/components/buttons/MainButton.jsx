import "./MainButton.css";

export const MainButton = ({ children, pageId, onPageChange }) => {
  return (
    <div className="MainButton">
      <button className="main-button" onClick={() => onPageChange(pageId)}>
        {children}
      </button>
    </div>
  );
};
