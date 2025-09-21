
# React Training Project: Multi-Page Dashboard

## Project Overview

You will be building a React TypeScript application using Vite with three independent pages that consume different free APIs. This is a collaborative project where each team member will be responsible for one page, but you'll need to coordinate on shared components and routing.

## Mock design link

https://www.figma.com/design/RenW0rMxO3u8s51UFUXXIV/training-task?node-id=102-2&t=r9BUGAj5eWeiuaZh-1

Icons, colors and texts in the mock are guides and suggestions, not requirements. Use what you find fit.

## Tech Stack

-   **React 18** with **TypeScript**
-   **Vite** as build tool
-   **MUI (Material-UI)** for UI components
-   **TanStack Router** for routing https://tanstack.com/router/latest/docs/framework/react/overview
-   **Free APIs** for data fetching
-   **Axios** for API calling
-   **React Icons** for Icons https://react-icons.github.io/react-icons/

## Project Structure

### Main Page (Landing Page)

Create a simple landing page with three navigation links/cards that route to each of the three main pages:

-   Weather Dashboard
-   Currency Exchange
-   News Aggregator

## Page Assignments

### Page 1: Weather Dashboard

**API**: OpenWeatherMap API ([https://openweathermap.org/api](https://openweathermap.org/api))

-   Free tier: 1,000 calls/day
-   Requires free account registration

**Features to implement:**

-   City search functionality
-   Current weather display with weather icons
-   5-day weather forecast
-   Chart for temperature, humidity for today + 5 days
-   Favorite cities list (stored in localStorage)
-   Temperature unit toggle (Celsius/Fahrenheit)
-   Weather-based background or theme changes
-   Loading states and error handling
-   Responsive design using MUI Grid/Stack

**Key Components**: Search bar, weather cards, forecast list, favorites sidebar

----------

### Page 2: Currency Exchange

**API**: ExchangeRate-API ([https://exchangerate-api.com/](https://exchangerate-api.com/)) or Fixer.io

-   ExchangeRate-API: 1,500 requests/month free
-   No registration required for ExchangeRate-API

**Features to implement:**

-   Currency converter with amount input
-   Real-time exchange rate display
-   Popular currency pairs (USD/EUR, GBP/USD, etc.)
-   Historical rate trends (simple chart using MUI or chart library)
-   Rate change indicators (up/down arrows with colors)
-   Favorite currency pairs (localStorage)
-   Loading states and error handling
-   Auto-refresh rates every few minutes

**Key Components**: Currency selector dropdowns, conversion calculator, rates table, trend charts

----------

### Page 3: News Aggregator

**API**: NewsAPI ([https://newsapi.org/](https://newsapi.org/))

-   Free tier: 100 requests/day
-   Requires free account registration

**Features to implement:**

-   News article search by keywords
-   Category filtering (business, technology, sports, etc.)
-   Country-based news filtering
-   Article cards with image, title, description
-   Bookmark articles (localStorage)
-   External link to full article
-   Pagination or infinite scroll
-   Loading states and error handling
-   Date filtering for articles

**Key Components**: Search bar, filter chips, article cards, bookmarks section

## Shared Requirements

### Routing Setup

Use TanStack Router to create routes for:

-   `/` - Main landing page
-   `/weather` - Weather Dashboard
-   `/currency` - Currency Exchange
-   `/news` - News Aggregator

### Shared Components to Create

-   **Header/Navigation**: Top navigation bar with links to all pages
-   **Loading Component**: Reusable loading spinner/skeleton
-   **Error Component**: Reusable error display with retry functionality
-   **Layout Component**: Common layout wrapper for all pages

### Technical Requirements

-   **TypeScript**: Properly type all props, state, and API responses
-   **No "any" type**: Types should work correctly, no "any" type allowed
-   **Error Handling**: Implement try-catch blocks and error boundaries
-   **Loading States**: Show loading indicators during API calls
-   **Responsive Design**: Use MUI breakpoints for mobile/tablet/desktop
-   **Local Storage**: Persist user preferences and favorites
-   **API Key Management**: Store API keys in environment variables (.env files)
-   **Git Collaboration**: Use feature branches, pull requests, and proper commit messages

## Pull Request Guidelines

**Please divide your work into multiple tasks and create a pull request per task.**

### PR Requirements

Each pull request must include:

**In PR Description:**

-   **Task**: Clear description of what specific task this PR addresses
-   **Contains**: Detailed list of changes, new files, and modified components
-   **Testing**: How to test the implemented feature
-   **Dependencies**: Any new libraries added or API keys required

### PR Rules

-   **No Conflicts**: PRs with merge conflicts are **NOT ACCEPTED** - resolve conflicts before requesting review
-   **Single Task**: Having one PR for everything is **NOT ACCEPTABLE**
-   **Proper TypeScript**: No "any" types allowed - all types must be properly defined
-   **Code Quality**: All TypeScript errors must be resolved
-   **Testing**: Demonstrate that your feature works before submitting PR

### Collaboration Requirements

-   **Communication**: Coordinate with team members on shared components
-   **Branch Strategy**: Use feature branches with descriptive names
-   **Regular Sync**: Pull from main branch regularly to avoid conflicts
-   **Review Process**: Each PR requires team member review before merge

Good luck with your collaborative React project!