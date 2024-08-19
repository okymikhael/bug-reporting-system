import React from 'react';

function BugList({ bugs, loadPage }) {
  return (
    <div>
      <h1>Bug List</h1>
      <div className="bug-list">
        {bugs.sort((a, b) => new Date(b.date) - new Date(a.date)).map(bug => (
          <div key={bug.id} className="bug-item" onClick={() => loadPage('detail', bug.id)}>
            <div className="bug-meta">
              <span className={`severity severity-${bug.severity}`}>{bug.severity}</span>
              <span>{bug.status}</span>
              <span>{bug.date}</span>
            </div>
            <h3>{bug.title}</h3>
            <p>Assigned to: {bug.assignee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BugList;