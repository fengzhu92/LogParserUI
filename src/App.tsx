import React from 'react';
import './index.css';
import FileUploader from './components/FileUploader';

const App: React.FC = () => {
  return (
    <div style={{
      maxWidth: 700,
      margin: '40px auto',
      padding: '32px',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '2rem',
        marginBottom: 32,
        color: '#2d3a4a',
        letterSpacing: '0.02em',
      }}>Log File Parser UI</h1>
      <FileUploader endpoint="host-summary" title="Host Access Summary" />
      <div style={{ height: 32 }} />
      <FileUploader endpoint="resource-summary" title="Resource Access Summary" />
    </div>
  );
};

export default App;
