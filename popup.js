const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.checked = true;

chrome.storage.local.get('isEnabled', (data) => {
    if (data.isEnabled !== undefined) {
        toggleSwitch.checked = data.isEnabled;
    }
});

toggleSwitch.addEventListener('change', () => {
    const newState = toggleSwitch.checked;
    chrome.storage.local.set({ isEnabled: newState });
});