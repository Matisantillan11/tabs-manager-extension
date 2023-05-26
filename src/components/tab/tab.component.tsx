
import { ITab } from '../../interfaces/tab/tab.interface';
import { STabContainer } from './styles/tabs.style'
import { useState } from 'react'

export const Tab = ({ title }: ITab) => {
  const [ active, setActive ] = useState<boolean>(false);
  return (
    <STabContainer>
      <div>
        <p>{title}</p>
      </div>
      <button onClick={() => setActive(!active)}>borrar</button>    
      <span className={active ? 'span-active' : ''}/>    
    </STabContainer>
  )
}