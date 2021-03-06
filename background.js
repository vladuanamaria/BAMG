var tab_id;
function updateSelected(tabId) {
    chrome.pageAction.setTitle({tabId:tabId, title:""});
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  tab_id = tabId;
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  tab_id = tabId;
});

var first_run = false;
if (!localStorage['ran_before']) {
  first_run = true;
  localStorage['ran_before'] = '1';
}

if (first_run) {
    chrome.tabs.create({ url : "http://mihaimv13.wix.com/bamg"});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.local_storage == "get")
      sendResponse({rec_language: localStorage["rec_language"],
                    rec_start : localStorage["rec_start"]});
  });
