document.getElementById('addSiteBtn').addEventListener('click', function() {
  const siteInput = document.getElementById('siteInput').value.trim();
  if (siteInput) {
    blockSite(siteInput);
    displayBlockedSite(siteInput);
  }
});

function displayBlockedSite(site) {
  const siteList = document.getElementById('siteList');
  const li = document.createElement('li');
  li.textContent = site;
  siteList.appendChild(li);
}

// Load initial blocked sites (if stored elsewhere)
chrome.storage.local.get({blockedSites: []}, function(data) {
  data.blockedSites.forEach(site => displayBlockedSite(site));
});
