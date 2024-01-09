//your JS code here. If required.
// Get form and input elements
const preferencesForm = document.getElementById('preferencesForm');
const fontSizeInput = document.getElementById('fontsize');
const fontColorInput = document.getElementById('fontcolor');

// Function to set the preferences as cookies
function setPreferences() {
  // Get the values from the form inputs
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  // Set the preferences as cookies
  document.cookie = `fontsize=${fontSize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  document.cookie = `fontcolor=${fontColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// Function to get the value of a cookie
function getCookieValue(cookieName) {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}

// Function to apply saved preferences
function applyPreferences() {
  // Get the saved values from the cookies
  const savedFontSize = getCookieValue('fontsize');
  const savedFontColor = getCookieValue('fontcolor');

  // Set the values on the form inputs
  fontSizeInput.value = savedFontSize;
  fontColorInput.value = savedFontColor;

  // Apply the preferences to the page
  document.documentElement.style.setProperty('--fontsize', savedFontSize);
  document.documentElement.style.setProperty('--fontcolor', savedFontColor);
}

// Add event listener for form submission
preferencesForm.addEventListener('submit', function (event) {
  event.preventDefault();
  setPreferences();
});

// Apply saved preferences on page load
applyPreferences();