import React, { useState } from 'react';
import DataList from './componenets/DataList';
import InputForm from './componenets/InputForm';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submit
  const handleFormSubmit = (newData) => {
    // Simulate the POST request
    const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    storedData.push(newData);
    localStorage.setItem('storedData', JSON.stringify(storedData));
  };

  // Fetch stored data (GET request simulation)
  const fetchData = () => {
    setIsLoading(true);
    const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    setData(storedData);
    setIsLoading(false);
  };

  // Inline styles for this component
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px',
      display: 'block',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <InputForm onSubmit={handleFormSubmit} />
      <button
        onClick={fetchData}
        style={styles.button}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      <DataList data={data} />
    </div>
  );
}

export default App;
