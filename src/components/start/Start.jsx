import './Start.css';
import { MainButton } from '../buttons/MainButton';
import partyImage from '../../../public/images/mia-9x16-gif2-6.1.gif'

export const Start = ({onPageChange}) => {
  return (
    <div className="start-container">
    <img src={partyImage} alt="Fest" className="party-image" />

      <div className='buttonContainer'>
      <MainButton pageId="information" onPageChange={onPageChange}>
          INFORMATION
        </MainButton>
        
        <MainButton pageId="anmalan" onPageChange={onPageChange}>
          OSA
        </MainButton>
      </div>
    </div>
  );
};