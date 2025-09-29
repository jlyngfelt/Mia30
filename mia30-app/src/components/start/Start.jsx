import './Start.css';
import { MainButton } from '../buttons/MainButton';

export const Start = ({onPageChange}) => {
  return (
    <div className="start-container">
      <h1>🎉 Välkommen till Mias 30-årsfest! 🎉</h1>
      <MainButton pageId="information" onPageChange={onPageChange}>
          INFORMATION
        </MainButton>
        
        <MainButton pageId="anmalan" onPageChange={onPageChange}>
          OSA
        </MainButton>
    </div>
  );
};