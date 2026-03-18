# Design Program Management - Carbon Design System Wireframe

A functional wireframe built with IBM's Carbon Design System that displays a comprehensive design program management dashboard.

## Features

- **Carbon Design System Compliant**: Built using official Carbon components and design patterns
- **Interactive Data Table**: Displays 18 products with multiple data points
- **Tab Navigation**: Filter products by category (All Products, WP Pilot, Non-Pilot, Rhea)
- **Summary Cards**: Quick overview of total products, Rhea products, and undocumented markers
- **Visual Indicators**: 
  - Color-coded health status tags (Strong, Moderate, Weak)
  - Team member avatars
  - Trend arrows for design-dev turnaround time
  - Customer interaction freshness indicators
  - Experience architecture maturity scores

## Technologies Used

- React 17
- Carbon Components React
- Carbon Icons React
- Vite (build tool)

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

## Project Structure

```
carbon-wireframe/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles including Carbon theme
│   ├── main.jsx         # React entry point
│   └── data.js          # Product data
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Data Structure

The wireframe displays the following columns:
- Product name
- Parent program
- Design lead
- Design team size
- Design gaps count
- Stakeholder map health
- Team maturity level
- Design-dev turnaround time with trend
- Customer interaction status
- Experience architecture maturity score

## Carbon Design System Components Used

- DataTable
- Tabs
- Tags
- Tiles
- Icons (ArrowUp, ArrowDown)
- Typography and spacing tokens