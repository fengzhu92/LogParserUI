import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Button.css';
import DataTable from './DataTable';

const FileUploader = ({ endpoint, title }) => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const fileInputRef = useRef(null); 

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if(!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(`http://localhost:5105/api/logs/${endpoint}`, formData, {
                headers: {'Content-Type': 'multipart/form-data'},
            });
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
          fileInputRef.current.value = ''; // Reset the file input element
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            <input type="file" accept=".txt,.log" onChange={handleFileChange} ref={fileInputRef} />
            <button onClick={handleUpload} className='button'>Parse Log</button>
            <span style={{ display: 'inline-block', width: '30px' }}></span> {/* Add space here */}
            <button onClick={handleReset} className='button'>Reset</button>
            {data.length > 0 && <DataTable data={data} />}
        </div>
    );
};

export default FileUploader;