import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Card />
    </div>
  );
}

export default App;
