import React from 'react';
import FileUploader from './components/FileUploader';

function App() {
  return (
    <div>
      <FileUploader endpoint="host-summary" title="Host Access Summary" />
      <FileUploader endpoint="resource-summary" title="Resource Access Summary" />
    </div>
  );
}

export default App;
