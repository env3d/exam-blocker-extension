
// Listen for messages from the page script
window.addEventListener("message", (event) => {
  if (event.source === window && event.data.type === "Global") {
    console.log("Received username from page script:", event.data.payload);    
    // Send a message to popup.js via the runtime
    // chrome.runtime.sendMessage({ message: event.data.payload });
    chrome.storage.local.set( { global: event.data.payload });
  }
});

// Inject a script to send a message to the content script
const script = document.createElement('script');
script.src = chrome.runtime.getURL('getGlobal.js');
document.documentElement.appendChild(script);
script.onload = function() {
  script.remove();
};

window.addEventListener('load', evt => {
  console.log(document.location);
  // document.querySelector('.d2l-html-block-rendered')
});

window.addEventListener('blur', function() {
  console.log('Should not be clicking outside\nYour action will be logged and reported!');
  // Perform any necessary action when the popup loses focus
}); 
