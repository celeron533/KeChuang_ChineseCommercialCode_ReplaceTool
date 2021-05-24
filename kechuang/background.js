function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf("bbs.kechuang.org") > -1) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);