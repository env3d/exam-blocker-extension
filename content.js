
// Listen for messages from the page script
window.addEventListener("message", (event) => {
  if (event.source === window && event.data.type === "Global") {
    console.log("Received username from page script:", event.data.payload);    
    // Send a message to popup.js via the runtime
    // chrome.runtime.sendMessage({ message: event.data.payload });
    chrome.storage.local.set( { global: event.data.payload });
    chrome.runtime.sendMessage({ action: "enableRuleset" });    
  }
});

window.addEventListener('load', evt => {
  chrome.storage.local.clear();
  chrome.runtime.sendMessage({ action: "disableRuleset" });
  // Inject a script to send a message to the content script
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('getGlobal.js');
  document.documentElement.appendChild(script);
  script.onload = function() {
    script.remove();
  };
  
});

window.addEventListener('blur', function() {
  chrome.storage.local.get(["global"], result => {
    if (result["global"] && result["global"].UserName) {
      // Perform any necessary action when the popup loses focus
      const message = 'Should not be clicking outside\nYour action will be logged and reported!';
      console.log(message);
      alert(message);
    }
  });
});
                          
                          
                          
