
# Medi-Cova Job

[![Medi-Cova Job](https://img.shields.io/badge/Project%20Status-Active-brightgreen)](https://github.com/YourRepo/medi-cova-job)  
Medi-Cova Job is a responsive web application built with **Next.js**, **TypeScript**, **Material UI**, and **Tailwind CSS**. It provides a user-friendly interface for job listings, application management, and more.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Custom Components](#custom-components)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Repository](#repository)
- [License](#license)

## About

Medi-Cova Job is designed for seamless job browsing and application management, allowing users to easily navigate through available job opportunities. Built with cutting-edge technologies like **Next.js** and **Material UI**, this app provides a responsive, modern design for both desktop and mobile users.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Job Listings**: Browse available job opportunities with a user-friendly interface.
- **Custom Forms**: Includes custom input fields, dropdowns, and buttons for a smooth user experience.
- **Sidebar & Navbar**: Navigation tools to easily access various sections of the application.
- **Material UI Integration**: Utilizing Material UI components for a professional, consistent UI design.

## Tech Stack

- **Next.js**: Version 14.2.5
- **TypeScript**: Version 5
- **Material UI**: Version 5.16.7
- **Tailwind CSS**: Version 3.4.15
- **React**: Version 18
- **PostCSS**: Version 8.4.49

## Custom Components

This project includes several custom-built components for enhanced user experience and design flexibility:

### 1. **PrimeryButton & SecondaryButton**

- Custom buttons used throughout the app. Located in the `button` folder.
- The **PrimaryButton** is used for primary actions, styled with a distinct color.
- The **SecondaryButton** is for secondary actions with a more subtle style.

### 2. **Custom Dropdown Menus**

- **User Dropdown**: A custom dropdown for user-related actions (e.g., profile settings).
- **Responsive Dropdown**: A responsive version of the dropdown for mobile screens, located in the `dropdownMenu` folder.

### 3. **Custom Inputs**

- **Text Input**: A custom input field designed for text entries, located in the `input` folder.
- **Dropdown Select Input**: A custom dropdown select input that integrates with the Material UI `Select` component, located in the `input` folder..
- **CountrySelector Input**:: A custom input component allowing users to select countries, located in the `input` folder..

### 4. **Custom Textarea**

- A styled **Textarea** component, located in the `textArea` folder. It includes all the necessary buttons for text formatting.

### 5. **Layout Components**

- **Sidebar**: A collapsible sidebar for navigation.
- **Navbar**: A top navigation bar for quick access to various sections of the app.
- **JobDetailsSection**: Displays detailed information about each job listing.
- **AboutSection**: A section to describe the application or company background.
- **RequirementsSection**: Lists the requirements for a specific job.

## Tailwind Custom Configuration

The Tailwind configuration has been customized to include a set of brand colors:

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        prim: "#185D43", // Primary color
        sec: "#2EAE7D", // Secondary color
        wro: "#E34817", // Warning color
      },
    },
  },
};
```

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourRepo/medi-cova-job.git
   ```
2. Navigate into the project directory:
   ```bash
   cd medi-cova-job
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables if needed (create a `.env.local` file for Next.js).

## Usage

To run the project locally:

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Live Demo

You can check out the live version of the app at:  
[Live Demo](https://medi-cova-job.vercel.app/)

## Repository

Check out the code and contribute here:  
[GitHub Repository](https://github.com/Abdelrhman-Winter/medi-cova-job)

## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Commit your changes
4. Push to your forked repository
5. Open a pull request

Make sure your code follows the project's coding standards and includes tests if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
