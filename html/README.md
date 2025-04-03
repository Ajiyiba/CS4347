# Property Management System Web Interfaces

This repository contains the HTML, CSS, and JavaScript files for a Property Management System web application. The system includes separate interfaces for employees and residents, designed to be user-friendly and accessible.

## Project Structure

```
property-management-system/
├── index.html                 # Main landing page
├── css/
│   ├── main.css               # Main stylesheet
│   └── resident.css           # Resident-specific styles
├── js/
│   ├── main.js                # Main JavaScript functionality
│   ├── employee.js            # Employee-specific functionality
│   └── resident.js            # Resident-specific functionality
├── employee/
│   ├── login.html             # Employee login page
│   └── dashboard.html         # Employee dashboard with all modules
└── resident/
    ├── login.html             # Resident login page
    └── dashboard.html         # Resident dashboard with all modules
```

## Features

### Employee Web Interface

The employee interface includes the following tabs:

1. **Payments**: View and manage all resident payments, including:
   - Recently paid
   - Upcoming payments
   - Overdue payments (highlighted)

2. **Resident Requests**: Manage all types of resident requests:
   - Renewal requests
   - Cancellation requests
   - Maintenance requests
   - Ability to respond to requests and create commissions

3. **Manage Residents**: Complete resident management system:
   - View and edit resident information
   - Search for residents by name, email, phone, or address
   - Manage payment information and lease details

4. **Commissions**: Track and manage commission information:
   - View active and previous commissions
   - Create new commission requests
   - See details about each commission

5. **Apartments**: Comprehensive apartment management:
   - View all apartment details (number, rooms, bathrooms, size)
   - See occupancy status and current residents
   - Manage apartment information

6. **Manage Employees**: (Visible only to upper management)
   - View all employee information
   - Add, edit, or remove employees
   - Manage employee access levels

### Resident Web Interface

The resident interface includes the following tabs:

1. **Payment Portal**: Complete payment management:
   - View upcoming rent payment date and amount
   - See payment history
   - Make payments online
   - Manage payment methods

2. **Renew/Cancel Lease**: Lease management options:
   - Submit lease renewal requests
   - Submit lease cancellation requests
   - View request status

3. **Maintenance Requests**: Maintenance management:
   - Submit new maintenance requests
   - Track the status of existing requests
   - View maintenance history

4. **Lease Details**: Complete lease information:
   - View all lease terms and details
   - Access lease documents
   - See important dates and information

## Using the Application

1. Open the `index.html` file in a web browser
2. Choose either Employee or Resident login
3. For demonstration purposes, no actual authentication is required
4. Navigate through the various tabs to explore functionality

## Notes

- This is a frontend-only implementation that demonstrates the user interface
- No database connectivity or server-side functionality is included
- The interface is fully responsive and works on mobile devices
- All form submissions are simulated for demonstration purposes
- The design prioritizes ease of use, especially for users with limited technical experience

## Future Enhancements

Potential future enhancements could include:

- Backend integration with a database
- Real authentication and user management
- Email notifications for requests and payments
- Document management system
- Mobile application with the same functionality 