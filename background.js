chrome.runtime.onInstalled.addListener(() => {
  // Enable all rule sets
  chrome.declarativeNetRequest.updateEnabledRulesets({
    disableRulesetIds: ["ruleset_1"]
    //enableRulesetIds: ["ruleset_1"]
  });
});

// Listen for messages to enable or disable rules
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "enableRuleset") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_1"]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error enabling ruleset:", chrome.runtime.lastError);
        sendResponse({ status: "error", message: chrome.runtime.lastError });
      } else {
        console.log("Ruleset 'ruleset_1' enabled.");
        sendResponse({ status: "success", message: "Ruleset enabled." });
      }
    });
  } else if (message.action === "disableRuleset") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: ["ruleset_1"]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error disabling ruleset:", chrome.runtime.lastError);
        sendResponse({ status: "error", message: chrome.runtime.lastError });
      } else {
        console.log("Ruleset 'ruleset_1' disabled.");
        sendResponse({ status: "success", message: "Ruleset disabled." });
      }
    });
  }
  // Return true to indicate an async sendResponse
  return true;
});
