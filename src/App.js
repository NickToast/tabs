import './App.css';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import { useState } from 'react';


function App() {

  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  //arrow function to change selectedTab to the tab clicked on
  const selectTab = tab => {
    setSelectedTab(tab);
  }

  return (
    <>
      <div>
        {
          tabs.map((tab,i) => {
            return (
              <Tabs name={tab} index={i} selectedTab = {selectTab} active={selectedTab} />
            )
          })
        }
      </div>
      <TabContent tab={selectedTab}/>
    </>
  );
}

export default App;
