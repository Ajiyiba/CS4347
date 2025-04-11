# Property Management System

A web-based property management system that allows both employees and residents to manage properties, maintenance requests, and communications efficiently.

## Features

- **Employee Interface**
  - Property management
  - Maintenance request handling
  - Resident communication
  - Document management
  - Reporting and analytics

- **Resident Interface**
  - Maintenance request submission
  - Document access
  - Communication with management
  - Account management

## Installation

1. **Prerequisites**
   - A modern web browser (Chrome, Firefox, Safari, or Edge)
   - Basic web server (Apache, Nginx, or similar)

2. **Setup**
   - Clone or download this repository to your local machine
   - Place the files in your web server's root directory
   - Ensure the following directory structure is maintained:
     ```
     property-management-system/
     ├── css/
     │   ├── main.css
     │   └── resident.css
     ├── js/
     │   ├── employee.js
     │   ├── main.js
     │   └── resident.js
     ├── employee/
     │   ├── dashboard.html
     │   ├── login.html
     │   └── register.html
     ├── resident/
     │   ├── dashboard.html
     │   ├── login.html
     │   └── register.html
     └── index.html
     ```

3. **Configuration**
   - No additional configuration is required for basic usage
   - For production deployment, ensure your web server is properly configured for security

## Usage

### For Employees

1. **Registration**
   - Navigate to the employee registration page
   - Fill in your details:
     - Full Name
     - Email
     - Phone Number
     - Role (Admin/Manager/Agent/Maintenance)
     - Location
     - Password
   - Click "Register" to create your account

2. **Login**
   - Go to the employee login page
   - Enter your email and password
   - Click "Login" to access the system

3. **Features**
   - View and manage properties
   - Handle maintenance requests
   - Communicate with residents
   - Access and manage documents
   - Generate reports

### For Residents

1. **Registration**
   - Navigate to the resident registration page
   - Fill in your details:
     - Full Name
     - Email
     - Phone Number
     - Unit Number
     - Building
     - Move-in Date
     - Password
   - Click "Register" to create your account

2. **Login**
   - Go to the resident login page
   - Enter your email and password
   - Click "Login" to access the system

3. **Features**
   - Submit maintenance requests
   - Access important documents
   - Communicate with management
   - Manage your account details

## Security

- All passwords are securely hashed
- HTTPS is recommended for production deployment
- Regular security updates are recommended

## Browser Compatibility

The system is compatible with:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)

## Support

For technical support or questions, please contact the system administrator.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Version

Current Version: 1.0.0
Last Updated: 2025 