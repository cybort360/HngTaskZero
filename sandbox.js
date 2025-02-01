function newTime() {
  const utcTime = document.getElementById("time");
  const now = new Date();
  const timeUpdate = now.toUTCString();
  utcTime.textContent = `Current Time in UTC: ${timeUpdate}`
}

newTime();