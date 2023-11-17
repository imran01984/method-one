import React from 'react';
import './Description.css';
import { useState } from 'react';
import { RiArrowUpDoubleLine,RiArrowDownDoubleFill } from "react-icons/ri";

function Description() {

    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

  return (
    <div className="middle-content">
      <p className='num'>01</p>
      <p className='main-heading'>What is it?</p>
      <br /><br />
     
      <p style={{ textAlign: 'left' }}>The Plan Testing Method Block covers the activities leading to the creation of the Test Approach and the Test Plan for a specific project or release. The Plan Testing method block is applicable for both Embedded Testing teams as well as Discrete Testing teams. link interno stesso tab link interno nuovo tab link esterno stesso tab link esterno nuovo tab
        The objectives of this method block are as follows:
        <br /><br/>
        1.	Review of high-level testing requirements to define and document the precise scope of testing, along with needed testing types and test phases.
        <br />
        2.	Deliverable 1 - To develop a comprehensive test approach document, specific to the application or system that is being tested, focused on When, Where and How testing activities will be performed to deliver the scope identified in point number 1
        <br />
        3.	Deliverable 2 - To develop a test plan that outlines the schedules of in-scope testing activities, plan for procurement/provisioning of pre-requisites required for the testing activities [e.g., test data and test environments], test execution cycles and capacity planning for the testing teams.
        <br /><br/>
        Below inputs are required for this method block:
        <br /><br/>
        1.	The primary input to Plan Testing method block is “Enterprise Testing Strategy” if it is already defined. In case the Enterprise Test Strategy is not defined or available, then the Test Approach will include additional elements of testing process definitions, RACI, Tooling considerations, test data and test environment strategy, as well as test automation strategy.
        <br />
        2.	The signed-off requirements which are in-scope.
        <br />
        3.	The signed-off delivery roadmap and release plan [or project plan]
        <br /><br/>
        This method block occurs after the “Enterprise Test Assessment and Test Strategy” method block.
      </p>
   
      <br />
      <p className='num'>02</p>
      <p className='main-heading'>Why do you need it?</p>
      <br /><br />
      <p>Description</p>
      <br />
      <p className='num'>03</p>
      <p className='main-heading'>Inputs</p>
      <br /><br />
      <p>Description</p>
      <br />
      <p className='num'>04</p>
      <p className='main-heading'>Deliverable(s)</p>
      <br /><br />
      <p>Description</p>
      <br />
      <p className='num'>05</p>
      <p className='main-heading'>Key considerations</p>
      <br /><br />
      <p>Description</p><br/>
     
        <span style={{ marginRight: '1085px' }}></span>
        <button
          onClick={toggleCollapse}
          style={{
            backgroundColor: '#c12be6',
            color: 'white',
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border:'none',
            marginLeft:'1085px',
          }}
        >
          {isCollapsed ? <RiArrowDownDoubleFill /> : <RiArrowUpDoubleLine />}
          {isCollapsed ? 'Expand All' : 'Collapse All'}
        </button>
        
<p className={`description ${isCollapsed ? '' : 'expanded'}`} style={{ display: 'flex', alignItems: 'center',width:'1215px' }}>
       
        {!isCollapsed && (
        <p className="expanded-content">
          {}
          <p>
            <bold>Considerations</bold>
          </p>
        </p>
      )}
      </p>
      <br />
      
      <p className='num'>06</p>
      <p className='main-heading'>Best practices</p>
      <br /><br />
      <p>Description</p>
      <br />
      <p className='num'>07</p>
      <p className='main-heading'>Risks & mitigations</p>
      <br /><br />
      <p>Description</p>
      <br />
      <p className='num'>08</p>
      <p className='main-heading'>Assets & tools</p>
      <br /><br />
      <p>Description</p>
      <br /><br />
      <p className='num'>09</p>
      <p className='main-heading'>Learn more</p>
      <br/><br/>
      <p>Description</p>
    </div>
  );
}

export default Description;
