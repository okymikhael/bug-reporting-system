import React, { useState } from 'react';

function EditBug({ bug, updateBug, pics, loadPage }) {
  const [title, setTitle] = useState(bug.title);
  const [severity, setSeverity] = useState(bug.severity);
  const [status, setStatus] = useState(bug.status);
  const [assignee, setAssignee] = useState(bug.assignee);
  const [description, setDescription] = useState(bug.description);
  const [attachments, setAttachments] = useState(bug.attachments || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBug = {
      ...bug,
      title,
      severity,
      status,
      assignee,
      description,
      attachments
    };
    updateBug(updatedBug);
    loadPage('detail', bug.id);
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

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Edit Bug</h1>
      <div className="edit-bug">
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
          <select value={assignee} onChange={(e) => setAssignee(e.target.value)} required>
            {pics.map(pic => <option key={pic} value={pic}>{pic}</option>)}
          </select>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <div className="attachments">
            <h3>Current Attachments:</h3>
            {attachments.map((attachment, index) => (
              <div key={index} className="attachment">
                {attachment.type.startsWith('image/') 
                  ? <img src={attachment.url} alt={attachment.name} width="200" />
                  : <p>{attachment.name}</p>}
                <button type="button" className="remove-attachment" onClick={() => removeAttachment(index)}>×</button>
              </div>
            ))}
          </div>
          <div className="file-upload">
            <label htmlFor="edit-file-input">Add New Attachments</label>
            <input type="file" id="edit-file-input" multiple onChange={handleFileSelect} />
          </div>
          <button type="submit">Update Bug</button>
          <button type="button" onClick={() => loadPage('detail', bug.id)}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditBug;