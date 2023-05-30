
import { ITab } from '../../interfaces/tab/tab.interface';
import { STabContainer } from './styles/tabs.style'
import { useState } from 'react'

export const Tab = ({ title, id }: ITab) => {
  const [ active, setActive ] = useState<boolean>(false);
  
  const navigate = () => {
    chrome.tabs.update(id, { active: true });
  }
  return (
    <STabContainer onClick={navigate}>
      <div>
        <p>{title}</p>
      </div>
      <button onClick={() => setActive(!active)}>borrar</button>    
      <span className={active ? 'span-active' : ''}/>    
    </STabContainer>
  )
}