chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.storage.local.get('isEnabled', (data) => {
      if (data.isEnabled) {
        const targetUrl = 'https://localhost:5001/swagger/index.html';
  
        if (changeInfo.status === 'complete' && !tab.url.startsWith(targetUrl)) {
          const urlPattern = /^(http:\/\/|https:\/\/)?localhost:5001(\/.*)?$/;
  
          if (urlPattern.test(tab.url)) {
            chrome.tabs.update(tabId, { url: targetUrl });
          }
        }
      }
    });
  });