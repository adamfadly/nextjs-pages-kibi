# Kitabisa FE code challenges

Welcome to your FE kitabisa code challenges! This guide will help you set up running the app. ensuring you have everything you need

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm or Yarn

## Getting Started

1. **Clone the Repo**: If you haven't already created a Next.js project, you can do so by running the following command:

   ```bash
    git clone git@github.com:adamfadly/nextjs-pages-kibi.git
   ```

2. **Intsall npm or yarn**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This command will start the development server and open your project in your default web browser.

## Project Structure

Your Next.js project should have the following directory structure:

- **`pages/`**: Contains your application's routes and views.
- **`public/`**: Stores static assets like images, fonts, and other files.
- **`styles/`**: Holds global styles or styling variables.
- **`components/`**: Houses reusable UI components.
- **`container/`**: All the view as present of page view
- **`context/`**: The state management store data

## Styling App

- **`Tailwind css`** - [Tailwind Documentation](https://tailwindcss.com/)

## Additional Info

to get the data i approach using `getServerSideProps` to fetch data and render the contents of a page at request time. then store into context.
