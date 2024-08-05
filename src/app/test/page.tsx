import React from 'react';
import '../../components/Icons/icons'; // Adjust the path as necessary to point to your icons file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const TestPage = () => {
    return (    
    <DefaultLayout>
      <div style={{ padding: '20px' }}>
        <h1>FontAwesome Test</h1>
        <p>Below should be a coffee icon:</p>
        <FontAwesomeIcon icon={faCoffee} size="sm"/>
        <FontAwesomeIcon icon={faCoffee} flip="vertical"/>
        <FontAwesomeIcon icon={faCoffee} pull="right"/>
        <FontAwesomeIcon icon={['fas', 'coffee']} size="xl" />  {/* Larger icon */}
      </div>

    </DefaultLayout>
    );
  };
  
  export default TestPage;
