import React from 'react';

const DataList = ({ data }) => {
  // Inline styles for this component
  const styles = {
    container: {
      marginTop: '20px',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    item: {
      backgroundColor: '#f8f9fa',
      marginBottom: '8px',
      padding: '10px',
      borderRadius: '4px',
    },
    message: {
      textAlign: 'center',
      fontSize: '16px',
      color: '#6c757d',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', color: '#007bff' }}>Stored Data</h2>
      {data.length === 0 ? (
        <p style={styles.message}>Click "Fetch Data" to load.</p>
      ) : (
        <ul style={styles.list}>
          {data.map((item, index) => (
            <li key={index} style={styles.item}>
              <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, 
              <strong> Email:</strong> {item.email}, <strong>Address:</strong> {item.address}, 
              <strong>Phone:</strong> {item.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataList;
