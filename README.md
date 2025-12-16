FRAM – Sustainable Food Delivery Webshop
Project Description

FRAM is a frontend-based sustainable food delivery webshop designed to connect customers with fresh, seasonal products from local farms in Norway. The project highlights sustainability, ease of use, and transparency, while demonstrating modern web development practices and responsible AI integration.

The solution is built using HTML, CSS, and JavaScript, and includes:

A responsive webshop interface

Product listing pages

A newsletter sign-up form with client-side validation

Integration of a third-party map API showing partner farms

An AI-powered customer service chatbot

This project was developed as part of an exam assignment and runs entirely in the browser, without any backend services.

Features
Core Functionality

Responsive Webshop UI
Fully responsive layout following provided Figma designs.

Product Listing Pages
Displays seasonal products with pricing and metadata.

Newsletter Form with Validation
Client-side validation using JavaScript and accessible feedback messages.

Partner Farms Map (Third-Party API)
Google Maps Platform integration displaying farm locations with markers and loading/error states.

AI-Powered Chatbot
OpenAI-powered chatbot that answers questions about the service and partner farms.

Technologies Used

HTML5 (semantic markup)

CSS3 (Flexbox, Grid, custom design tokens)

JavaScript (ES6+)

Google Maps Platform (GMP) API

OpenAI API

Font Awesome

Git & GitHub

Project Structure

project-root/
│
├── index.html
├── products.html
├── chat.html
├── checkout.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── chat.js
│   ├── newsletter.js
│   ├── maps-gmp.js
│   └── config.js   (not committed – API keys)
│
├── images/
│   └── *.png
│
└── README.md

Setup and Installation
1. Clone the Repository
git clone https://github.com/your-username/fram-webshop.git

2. Open Locally

Open the project using a local development server (recommended):

npx serve


or use VS Code Live Server.

API Configuration
OpenAI API (Chatbot)

Create a file named config.js inside the js/ folder:

export const OPENAI_API_KEY = "YOUR_API_KEY_HERE";


⚠️ Do not commit this file. It is excluded from version control.

Google Maps API

Replace the placeholder API key inside maps-gmp.js or your Maps loader configuration with your own Google Maps Platform key.

Accessibility

This project follows WCAG 2.1 Level AA guidelines, including:

Semantic HTML structure

Proper heading hierarchy

aria-live regions for dynamic feedback

Keyboard navigability

Visible focus states

Accessible form validation feedback

Performance and Optimisation

Optimised image usage

Minimal JavaScript execution

Asynchronous API calls using async/await

Loading and error states for API-driven features

No unnecessary dependencies

AI Usage and Ethical Considerations

The AI chatbot is designed to:

Answer questions strictly related to the FRAM service and partner farms

Avoid speculation and respond with uncertainty when appropriate

Minimise bias by using neutral, factual prompts

Not collect or store personal user data

Limitations:

Responses are generated dynamically and may occasionally be incomplete or imprecise.

The chatbot does not replace human customer support.

Known Limitations

No backend or persistent data storage

Newsletter sign-up is simulated (no actual submission)

Cart functionality is UI-only

Chatbot responses depend on third-party API availability

Future Improvements

Backend integration for orders and newsletter subscriptions

User authentication and persistent cart

Improved AI context memory

Expanded accessibility testing with screen readers

Deployment with environment-based API handling

Development Process

The project was developed iteratively, starting with core layout and design implementation, followed by progressive enhancement of interactivity, accessibility, and API integrations. Git was used throughout the development process with meaningful commits documenting each stage.

Author

Andrea
Frontend Development Student
Exam Project – Sustainable Food Delivery Webshop