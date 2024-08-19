import React, { useState } from 'react';

function NewTicket({ addBug, pics, loadPage }) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('');
  const [pic, setPic] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBug = {
      id: Date.now(),
      title,
      severity,
      status: "Open",
      date: new Date().toISOString().split('T')[0],
      assignee: pic,
      description,
      attachments
    };
    addBug(newBug);
    loadPage('home');
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    setAttachments([...attachments, ...newAttachments]);
  };

  return (
    <div>
      <h1>Create New Ticket</h1>
      <div className="new-ticket">
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug Title" required />
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} required>
            <option value="">Select Severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select value={pic} onChange={(e) => setPic(e.target.value)} required>
            <option value="">Select Person In Charge (PIC)</option>
            {pics.map(pic => <option key={pic} value={pic}>{pic}</option>)}
          </select>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bug Description" required></textarea>
          <div className="file-upload">
            <label htmlFor="file-input">Attach Files</label>
            <input type="file" id="file-input" multiple onChange={handleFileSelect} />
          </div>
          <div id="file-list">
            {attachments.map((file, index) => (
              <div key={index} className="file-item">{file.name}</div>
            ))}
          </div>
          <button type="submit">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;