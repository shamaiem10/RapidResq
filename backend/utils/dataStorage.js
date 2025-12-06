/**
 * Utility for saving form data to JSON file
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const LOGIN_FILE = path.join(DATA_DIR, 'logins.json');
const SIGNUP_FILE = path.join(DATA_DIR, 'signups.json');
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Initialize JSON file if it doesn't exist
 */
const initFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  }
};

/**
 * Read data from JSON file
 */
const readData = (filePath) => {
  initFile(filePath);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
};

/**
 * Write data to JSON file
 */
const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
    return false;
  }
};

/**
 * Save login data
 */
const saveLogin = (loginData) => {
  const data = readData(LOGIN_FILE);
  const entry = {
    ...loginData,
    timestamp: new Date().toISOString()
  };
  data.push(entry);
  writeData(LOGIN_FILE, data);
  return entry;
};

/**
 * Save signup data
 */
const saveSignup = (signupData) => {
  const data = readData(SIGNUP_FILE);
  const entry = {
    ...signupData,
    timestamp: new Date().toISOString()
  };
  data.push(entry);
  writeData(SIGNUP_FILE, data);
  return entry;
};

/**
 * Save contact data
 */
const saveContact = (contactData) => {
  const data = readData(CONTACT_FILE);
  const entry = {
    ...contactData,
    timestamp: new Date().toISOString()
  };
  data.push(entry);
  writeData(CONTACT_FILE, data);
  return entry;
};

module.exports = {
  saveLogin,
  saveSignup,
  saveContact
};

