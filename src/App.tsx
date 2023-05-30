
import { useEffect, useState } from 'react';
import { Tab } from './components/tab/tab.component'
import { SContainer } from './components/ui/container.styled'
import { Input } from './components/ui/input';
import { useAtomValue } from 'jotai';
import { searchAtom } from './atoms/input.atom';
import { ITab } from './interfaces/tab/tab.interface';

function App() {
  const [tabs, setTabs] = useState<ITab[]>([]);
  const [search, setSearch] = useState<ITab[]>([]);
  const searchValue = useAtomValue(searchAtom);

  const getTabInfo = async () => {
    await chrome.tabs.query({}, (tabs: chrome.tabs.Tab[]) =>{
      tabs.forEach((tab: chrome.tabs.Tab) => {

        const newTab = {
          id: tab.id,
          title: tab.title,
          url: tab.url
        }
        
        setTabs((prevTabs: any) => [...prevTabs, newTab])
      });
    });
  };

  const filterTabs = () => {
    const filteredTabs = tabs.filter((tab) => tab.title.includes(searchValue))
    setSearch(filteredTabs)
  }

  useEffect(() => {
    getTabInfo();
  }, [])

  useEffect(() => {
    if(searchValue !== "") filterTabs()
  }, [searchValue])

  const renderTabs = () => {
    if(searchValue !== "") {
      return search?.map((tab: ITab, index: number) => (
        <Tab key={index} title={tab.title} url={tab.url} id={tab.id}/>
      ))
    }

    return tabs?.map((tab: ITab) => <Tab title={tab.title} url={tab.url} id={tab.id}/>)
  }

  return (
    <SContainer>
      <header>
        <h3> Tab Manager </h3>
        <p>Manage your tabs efficently.</p>
        <Input />
      </header>
      {renderTabs()} 
    </SContainer>
  )
}

export default App
