import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BugList from './components/BugList';
import BugDetails from './components/BugDetails';
import NewTicket from './components/NewTicket';
import EditBug from './components/EditBug';
import LoginForm from './components/LoginForm';
import './styles.css';

const initialBugs = [
  { id: 1, title: "Login page not responsive on mobile", severity: "high", status: "Open", date: "2023-05-10", assignee: "John Doe", description: "The login page is not rendering correctly on mobile devices, making it difficult for users to log in." },
  { id: 2, title: "Cart total not updating", severity: "medium", status: "In Progress", date: "2023-05-11", assignee: "Jane Smith", description: "When items are added or removed from the cart, the total price is not updating in real-time." },
  { id: 3, title: "Typo in footer", severity: "low", status: "Closed", date: "2023-05-09", assignee: "Bob Johnson", description: "There is a spelling mistake in the company's address in the website footer." },
];

const pics = ["John Doe", "Jane Smith", "Bob Johnson", "Alice Williams", "Charlie Brown"];

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bugs, setBugs] = useState(initialBugs);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedBugId, setSelectedBugId] = useState(null);

  const loadPage = (page, id = null) => {
    setCurrentPage(page);
    setSelectedBugId(id);
  };

  const addBug = (newBug) => {
    setBugs([newBug, ...bugs]);
  };

  const updateBug = (updatedBug) => {
    setBugs(bugs.map(bug => bug.id === updatedBug.id ? updatedBug : bug));
  };

  const login = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      loadPage('home');
    } else {
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    loadPage('home');
  };

  return (
    <div>
      <Navbar currentUser={currentUser} loadPage={loadPage} logout={logout} />
      <div className="container">
        {currentPage === 'home' && <BugList bugs={bugs} loadPage={loadPage} />}
        {currentPage === 'detail' && <BugDetails bug={bugs.find(b => b.id === selectedBugId)} currentUser={currentUser} updateBug={updateBug} loadPage={loadPage} />}
        {currentPage === 'new' && <NewTicket addBug={addBug} pics={pics} loadPage={loadPage} />}
        {currentPage === 'edit' && <EditBug bug={bugs.find(b => b.id === selectedBugId)} updateBug={updateBug} pics={pics} loadPage={loadPage} />}
        {currentPage === 'login' && <LoginForm login={login} />}
      </div>
    </div>
  );
}

export default App;