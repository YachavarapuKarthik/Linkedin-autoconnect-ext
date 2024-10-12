// App.tsx
import React from 'react';
import './App.css';

function App() {
  const handleAutoConnect = () => {
    // This function Sends a message to content script to start the auto-connect process
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "AUTO_CONNECT" });
      }
    });
  };

  return (
    <div className="App">
      {/* Imported linkedin logo from google */}
      <img className= 'logo' src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="linkedin icon"/>
      <h1>LinkedIn Auto Connect</h1>
      {/* Connect all button*/}
      <button onClick={handleAutoConnect}>Start Auto Connect</button>
    </div>
  );
}

export default App;
