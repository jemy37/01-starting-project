
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import  CoreConcept  from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;
  if(selectedTopic){
    tabContent = <div id ="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </div>
  };

  function handleClick(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept{...conceptItem} />)}
            {/* <CoreConcept 
            {...CORE_CONCEPTS[0]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[1]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[3]}/> */}
          </ul>          
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected ={selectedTopic === 'components'} 
            onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton
            isSelected ={selectedTopic === 'jsx'} 
            onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton 
            isSelected ={selectedTopic === 'props'}
            onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton 
            isSelected ={selectedTopic === 'state'}
            onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
          {/* {!selectedTopic ? <p>Please select a topic.</p> : <div id ="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
              </div>} */}
            
        </section>        
      </main>
      
    </div>
  );
}

export default App;
