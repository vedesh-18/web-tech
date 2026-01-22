let activityLog = [];
let clickCount = 0;
const CLICK_THRESHOLD = 10;
const THRESHOLD_TIME = 5000;

const logDisplay = document.getElementById('log-display');
const warningBox = document.getElementById('warning-box');
const interactionZone = document.getElementById('interaction-zone');

function logActivity(type, target, details = "") {
    const entry = {
        timestamp: new Date().toLocaleTimeString(),
        type: type,
        target: target,
        details: details
    };
    
    activityLog.push(entry);
    updateDisplay(entry);
    checkSuspiciousActivity(type);
}

function updateDisplay(entry) {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerHTML = `[${entry.timestamp}] <strong>${entry.type}</strong> on &lt;${entry.target}&gt; ${entry.details}`;
    logDisplay.prepend(div);
}

function checkSuspiciousActivity(type) {
    if (type === 'CLICK') {
        clickCount++;
        if (clickCount > CLICK_THRESHOLD) {
            warningBox.className = 'warning-visible';
        }
        setTimeout(() => {
            clickCount = Math.max(0, clickCount - 1);
            if (clickCount <= CLICK_THRESHOLD) {
                warningBox.className = 'warning-hidden';
            }
        }, THRESHOLD_TIME);
    }
}

document.addEventListener('click', (e) => {
    logActivity('CLICK', e.target.tagName, `ID: ${e.target.id || 'none'}`);
}, true);

document.addEventListener('keydown', (e) => {
    logActivity('KEYPRESS', e.target.tagName, `Key: ${e.key}`);
});

document.addEventListener('focus', (e) => {
    logActivity('FOCUS', e.target.tagName, "");
}, true);

document.addEventListener('blur', (e) => {
    logActivity('BLUR', e.target.tagName, "");
}, true);

function resetLog() {
    activityLog = [];
    clickCount = 0;
    logDisplay.innerHTML = '';
    warningBox.className = 'warning-hidden';
}

function exportLog() {
    if (activityLog.length === 0) {
        alert("Log is empty!");
        return;
    }
    
    let text = "USER ACTIVITY LOG\n=================\n";
    activityLog.forEach(entry => {
        text += `[${entry.timestamp}] ${entry.type} - ${entry.target} ${entry.details}\n`;
    });
    
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'activity_log.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}