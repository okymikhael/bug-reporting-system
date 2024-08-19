import React, { useState } from 'react';

function BugDetails({ bug, currentUser, updateBug, loadPage }) {
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      const updatedBug = {
        ...bug,
        comments: [
          ...(bug.comments || []),
          {
            author: currentUser.username,
            date: new Date().toLocaleString(),
            content: newComment
          }
        ]
      };
      updateBug(updatedBug);
      setNewComment('');
    }
  };

  return (
    <div>
      <h1>Bug Details</h1>
      <div className="bug-details">
        <div className="bug-meta">
          <span className={`severity severity-${bug.severity}`}>{bug.severity}</span>
          <span>{bug.status}</span>
          <span>Reported on: {bug.date}</span>
          <span>Assigned to: {bug.assignee}</span>
        </div>
        <h2>{bug.title}</h2>
        <div className="bug-description">
          <p>{bug.description || "No description available."}</p>
        </div>
        <div className="attachments">
          <h3>Attachments:</h3>
          {bug.attachments ? bug.attachments.map((attachment, index) => (
            <div key={index} className="attachment">
              {attachment.type.startsWith('image/') 
                ? <img src={attachment.url} alt={attachment.name} width="200" />
                : <p>{attachment.name}</p>}
            </div>
          )) : <p>No attachments</p>}
        </div>
        {currentUser && <button className="edit-button" onClick={() => loadPage('edit', bug.id)}>Edit Bug</button>}
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {bug.comments ? bug.comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-meta">
              <span>{comment.author}</span>
              <span>{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        )) : <p>No comments yet.</p>}
        {currentUser && (
          <div className="new-comment">
            <textarea 
              placeholder="Add a comment..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button onClick={addComment}>Post Comment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BugDetails;