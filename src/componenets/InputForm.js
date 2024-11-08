import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!name || !age || !email || !address || !phone || isNaN(age)) {
      setError('Please fill in all fields correctly.');
      return;
    }

    // Reset error message and call the parent onSubmit function
    setError('');
    onSubmit({ name, age: parseInt(age, 10), email, address, phone });
    setName('');
    setAge('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  // Inline styles for this component
  const styles = {
    container: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      marginBottom: '20px',
    },
    heading: {
      textAlign: 'center',
      color: '#007bff',
    },
    formGroup: {
      marginBottom: '10px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      marginTop: '5px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    errorMessage: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Enter User Data</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number:</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
