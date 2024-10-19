


window.addEventListener('load', evt => {
  console.log('hello popup');

  chrome.storage.local.get(["global"], result => {
    getAllCookies(result["global"].UserName);
  });
  
});


function getAllCookies(userName) {
  const domain = 'd2l.langara.bc.ca';
  chrome.cookies.getAll({ domain: domain }, function(cookies) {
    console.log(`Cookies for ${domain}:`, cookies);
    cookies.unshift({userid: userName});
    //const launch_id = btoa(JSON.stringify(cookies));
    document.getElementById('launch_id').innerHTML = JSON.stringify(cookies, null, 2);
  });
}

// window.addEventListener('load', getAllCookies());
