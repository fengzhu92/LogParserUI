import React, { useState, useRef, ChangeEvent } from 'react';
import axios from 'axios';
import './Button.css';
import DataTable from './DataTable';

interface FileUploaderProps {
  endpoint: string;
  title: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ endpoint, title }) => {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `http://localhost:5105/api/logs/${endpoint}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error('Error parsing the file:', error);
      alert('Error parsing the file.');
    }
  };

  // Reset the file and data to their initial states
  const handleReset = () => {
    setFile(null);
    setData([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <input
        type="file"
        accept=".txt,.log"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button onClick={handleUpload} className="button">
        Parse Log
      </button>
      <span style={{ display: 'inline-block', width: '30px' }}></span>
      <button onClick={handleReset} className="button">
        Reset
      </button>
      {data.length > 0 && <DataTable data={data} />}
    </div>
  );
};

export default FileUploader;
