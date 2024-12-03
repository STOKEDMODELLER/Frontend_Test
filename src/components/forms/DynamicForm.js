import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch form fields
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

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/applications', formData);
      // Handle success
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const renderField = field => {
    switch (field.type) {
      case 'text':
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <input type="text" name={field.name} onChange={onChange} required={field.required} />
          </div>
        );
      // Handle other field types
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map(field => field.visible && renderField(field))}
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default DynamicForm;
