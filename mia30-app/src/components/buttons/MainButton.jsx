import './MainButton.css';

export const MainButton = ({children, pageId, onPageChange}) => {
  return (
    <button
    className="main-button"
    onClick={() => onPageChange(pageId)}
    >
      {children}
    </button>
  );
};