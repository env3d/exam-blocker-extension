// Add a new site to the block list
function blockSite(siteUrl) {
  const urlFilter = `*://${siteUrl}/*`;

  // Generate a new rule for blocking the site
  const newRule = {
    id: Date.now(), // Use a unique id for each rule
    priority: 1,
    action: {
      type: "block"
    },
    condition: {
      urlFilter: urlFilter,
      resourceTypes: ["main_frame"]
    }
  };

  // Add the new blocking rule dynamically
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [newRule],
    removeRuleIds: []
  }, () => {
    console.log(`Blocked: ${siteUrl}`);
  });
}

// Example: remove all rules if needed
function clearAllBlockedSites() {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [],
    removeRuleIds: ['all'] // Clears all rules
  });
}
