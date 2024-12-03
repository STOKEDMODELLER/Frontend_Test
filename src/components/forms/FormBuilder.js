import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    // Fetch existing fields
    const fetchFields = async () => {
      try {
        const res = await axios.get('/api/forms');
        setFields(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchFields();
  }, []);

  const addField = async fieldData => {
    try {
      const res = await axios.post('/api/forms', fieldData);
      setFields([...fields, res.data]);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  // Implement UI for adding fields
  return (
    <div>
      <h2>Form Builder</h2>
      {/* Implement form for adding fields */}
      {/* List existing fields */}
    </div>
  );
};

export default FormBuilder;
