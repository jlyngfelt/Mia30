import './Start.css';
import { MainButton } from '../buttons/MainButton';


export const Start = ({onPageChange}) => {
 return (
    <div className="start-container">
      <h1>Mia Westh</h1>
      <h1 className='big'>30</h1>
      <div className='textbox'>
        <h4>Hanssons loge 6/6 2026</h4>
        <img src="/images/mia-9x16-gif3-3.3.gif" alt="Party-gif" className="party-image"/>
      </div>
      
      <h1 className='big celebrate'>Mia fyller 30 & jävlar vad det ska firas</h1>
      
      <div className='buttonContainer'>
        <MainButton pageId="information" onPageChange={onPageChange}>
          INFORMATION
        </MainButton>
        
        <MainButton pageId="anmalan" onPageChange={onPageChange}>
          OSA
        </MainButton>
      </div>
      
      <div className='mountainContainer'></div>
    </div>
  );
};