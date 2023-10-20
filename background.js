// background.js

let markingHighlights = false;
const highlights = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startHighlight') {
    markingHighlights = true;
  } else if (message.action === 'stopHighlight') {
    markingHighlights = false;
  } else if (message.action === 'saveHighlight' && markingHighlights) {
    highlights.push({ timestamp: new Date().toLocaleString(), label: message.label });
  }
  sendResponse({ success: true });
});

function getHighlights() {
  return highlights;
}
