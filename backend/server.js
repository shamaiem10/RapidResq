const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import validation and storage utilities
const { validateLogin, validateSignup, validateContact } = require('./utils/validation');
const { saveLogin, saveSignup, saveContact } = require('./utils/dataStorage');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', status: 'success' });
});

/**
 * Login Route - POST /api/login
 */
app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate login data
    const validation = validateLogin({ username, password });

    if (!validation.valid) {
      console.log('❌ Login validation failed:', validation.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Prepare data for storage (exclude password from saved data for security)
    const loginData = {
      username: username.trim(),
      loginTime: new Date().toISOString()
    };

    // Print to console
    console.log('📝 Login attempt received:');
    console.log('   Username:', loginData.username);
    console.log('   Time:', loginData.loginTime);
    console.log('   Password length:', password ? password.length : 0, 'characters');

    // Save to JSON file
    const savedEntry = saveLogin(loginData);
    console.log('💾 Login data saved to file');

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        username: savedEntry.username,
        timestamp: savedEntry.timestamp
      }
    });

  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

/**
 * Register/Signup Route - POST /api/register
 */
app.post('/api/register', (req, res) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
      phone,
      location,
      age,
      gender,
      bloodGroup,
      skills,
      otherSkill
    } = req.body;

    // Validate signup data
    const validation = validateSignup({
      fullName,
      username,
      email,
      password,
      phone,
      location,
      age
    });

    if (!validation.valid) {
      console.log('❌ Signup validation failed:', validation.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Prepare data for storage (exclude password from saved data for security)
    const signupData = {
      fullName: fullName.trim(),
      username: username.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      location: location.trim(),
      age: age ? Number(age) : null,
      gender: gender || null,
      bloodGroup: bloodGroup || null,
      skills: skills || [],
      otherSkill: otherSkill ? otherSkill.trim() : null
    };

    // Print to console
    console.log('📝 Signup data received:');
    console.log('   Full Name:', signupData.fullName);
    console.log('   Username:', signupData.username);
    console.log('   Email:', signupData.email);
    console.log('   Phone:', signupData.phone);
    console.log('   Location:', signupData.location);
    console.log('   Age:', signupData.age || 'Not provided');
    console.log('   Gender:', signupData.gender || 'Not provided');
    console.log('   Blood Group:', signupData.bloodGroup || 'Not provided');
    console.log('   Skills:', signupData.skills.length > 0 ? signupData.skills.join(', ') : 'None');
    console.log('   Other Skill:', signupData.otherSkill || 'None');
    console.log('   Password length:', password ? password.length : 0, 'characters');

    // Save to JSON file
    const savedEntry = saveSignup(signupData);
    console.log('💾 Signup data saved to file');

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: {
        username: savedEntry.username,
        email: savedEntry.email,
        timestamp: savedEntry.timestamp
      }
    });

  } catch (error) {
    console.error('❌ Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

/**
 * Contact Route - POST /api/contact
 */
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validate contact data
    const validation = validateContact({
      name,
      email,
      message
    });

    if (!validation.valid) {
      console.log('❌ Contact validation failed:', validation.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Prepare data for storage
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'No subject',
      message: message.trim()
    };

    // Print to console
    console.log('📝 Contact form submission received:');
    console.log('   Name:', contactData.name);
    console.log('   Email:', contactData.email);
    console.log('   Subject:', contactData.subject);
    console.log('   Message:', contactData.message);

    // Save to JSON file
    const savedEntry = saveContact(contactData);
    console.log('💾 Contact data saved to file');

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name: savedEntry.name,
        email: savedEntry.email,
        timestamp: savedEntry.timestamp
      }
    });

  } catch (error) {
    console.error('❌ Contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Data will be saved to: ${__dirname}/data/`);
});
