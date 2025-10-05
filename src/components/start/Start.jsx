import './Start.css';
import { MainButton } from '../buttons/MainButton';


export const Start = ({onPageChange}) => {
  return (
    <div className="start-container">

    <img src="/images/mia-9x16-gif3-3.3.gif" alt="Party" className="party-image"/>

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