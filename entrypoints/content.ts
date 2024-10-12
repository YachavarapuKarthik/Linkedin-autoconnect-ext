export default defineContentScript({
  // First matches with linkedin url
  matches: ['*://*.linkedin.com/*'],
  main() {
    console.log('LinkedIn Auto-Connect Content Script Running');

    // This Function to automatically connects all connections
    async function autoConnect() {
      // Finds all 'Connect' buttons on the page
      const connectButtons = Array.from(document.querySelectorAll('button'))
        .filter((btn): btn is HTMLButtonElement => btn instanceof HTMLButtonElement && btn.innerText.includes('Connect'));

      if (connectButtons.length === 0) {
        console.error("No Connect buttons found.");
        return { status: "No Connect buttons found on this page." };
      }

      // Clicks each 'Connect' button
      for (const button of connectButtons) {
        button.click();
        console.log('Clicked connect button');

        // Handles send now button also
        const sendNowButton = document.querySelector('button[aria-label="Send now"]') as HTMLButtonElement;
        if (sendNowButton) {
          sendNowButton.click();
          console.log('Clicked send now button');
        }

        // Delay of 1.5 second
        await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 seconds delay
      }

      return { status: "Auto connect process completed." };
    }

    // Listen for messages from the popup (App.tsx)
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "AUTO_CONNECT") {
        autoConnect();  // Calls the auto-connect functionality
      }
    });
  },
});
