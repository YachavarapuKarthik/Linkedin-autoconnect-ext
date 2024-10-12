export default defineBackground(() => {
  console.log('LinkedIn Auto-Connect Background Script Running');

  // Listens for the message from App.tsx
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'AUTO_CONNECT') {
      console.log('Received AUTO_CONNECT message from popup');

      // Get the current active tab i.e, Linkkedin Page
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0 && tabs[0].id) {
          // Send a message to the content script in the active linkedin tab
          chrome.tabs.sendMessage(tabs[0].id, { action: 'AUTO_CONNECT' }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message to content script:', chrome.runtime.lastError);
            } else {
              console.log('Message sent to content script, response:', response);
            }
          });
        } else {
          console.error('No active tabs found');
        }
      });
    }

    // sends Response to the popup 
    sendResponse({ status: 'Message processed in background script' });
    // Returning `true` indicates we want to send an async response
    return true;
  });
});