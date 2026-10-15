// Set a quick test alarm to fire every 0.5 minutes (30 seconds)
chrome.alarms.create("testAlarm", {
  delayInMinutes: 0.5,
  periodInMinutes: 0.5
});

console.log("Alarm scheduled! Waiting for first trigger...");

// Listen for the alarm to ring
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "testAlarm") {
    console.log("⏰ Ding! The alarm fired at:", new Date().toLocaleTimeString());
  }
});
