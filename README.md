# Listing Real Estate - Frontend Assessment

## Overview

**Real Estate** is a frontend application developed to display and manage listing information. This project utilizes modern technologies to ensure a responsive and easy-to-use interface.

---

## How to Run

### Prerequisites

- **Node.js** (Version 14 or higher)
- **NPM** (or **Yarn**) installed

### Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/TiagoEsdras/frontend-assessment.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd real-state-listing
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the project in development mode**:

   ```bash
   npm run dev
   ```

5. **Access the application**: The project will be available at [http://localhost:5173/](http://localhost:5173/).

---

## Technologies Used

The **Listing** project utilizes the following technologies:

- **React**: Main library for building user interfaces.
- **TypeScript**: Programming language that adds static typing to JavaScript, making the code more robust and safe.
- **Tailwind CSS**: Utility-first framework for quick and responsive styling.
- **Vite**: A fast build tool used to optimize the development experience.

---

## Project Structure

The project is organized to ensure clean, scalable, and maintainable code, with a clear separation of responsibilities:

- `src/`: Contains the core files of the project.
  - `assets/`: Static assets such as images, fonts, or icons used in the application.
  - `components/`: Modular and reusable UI components.
    - `pages/`: Full-page components representing different views or routes of the application.
  - `utils/`: Utility functions and helper methods that provide reusable functionality across the application.
  - `services/`: Responsible for making API requests, managing data fetching, and handling filters.
  - `models/`: Defines the types and shapes of data entities used throughout the application.
  - `data/`: Contains mock JSON data used to simulate API responses for development and testing.
  - `interfaces/`: Defines TypeScript interfaces for the structure and type safety of objects.
  - `contexts/`: Manages global state using the Context API, providing shared state across components.

---

## Features

The **Listing** application offers the following features:

- Display of item lists with pagination.
- Filtering items by the number of bedrooms, bathrooms, garages, and price range.
- Adding and removing items from the list.
- Detailed view of each item.

---

## Available Scripts

In the project, you can run the following commands:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds an optimized version of the project for production.
- `npm run lint`: Runs code linting to ensure best practices.

---

## Design Overview

The design of the **Real State Listing** application focuses on a clean, modern, and user-friendly interface to provide a seamless experience for users browsing property listings.

![Design Overview](https://i.imgur.com/E8A2aAW.jpeg)

### Key Design Elements:

- **Minimalist Layout**: The interface is structured with a grid-based layout, ensuring a clean and organized display of property listings.
- **Card-based Design**: Each property is presented in a card format, offering essential details like the number of bedrooms, bathrooms, garages, and price, with visual emphasis on the property image.
- **Filter and Search**: The filter section is placed prominently, allowing users to easily narrow down their search by selecting criteria such as price range, number of rooms, and other relevant features.
- **Responsive Design**: The application is designed to be fully responsive, ensuring an optimal experience on both mobile and desktop devices.
- **Intuitive Navigation**: The navigation is straightforward, with easy access to detailed views of each property and smooth transitions between different sections.

This design approach enhances the user experience by providing an aesthetically pleasing and functional interface tailored to the needs of users searching for real estate.

---
