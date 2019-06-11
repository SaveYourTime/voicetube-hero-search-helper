function checkForValidURL(tabId, changeInfo, tab) {
  const validURL = 'tw.voicetube.com';
  if (tab.status === 'complete' && tab.url.includes(validURL)) {
    chrome.pageAction.show(tabId);
    _gaq.push(['_trackEvent', 'View', 'entered', 'Website', 1, true]);
  } else {
    chrome.pageAction.hide(tabId);
  }
}
chrome.tabs.onUpdated.addListener(checkForValidURL);

function onPageActionClicked(tab) {
  _gaq.push(['_trackEvent', 'Button', 'clicked']);
  chrome.tabs.executeScript(tab.id, {
    file: 'js/inject.js'
  });
};
chrome.pageAction.onClicked.addListener(onPageActionClicked);