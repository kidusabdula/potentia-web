Potentia - Bitcoin Mining Company Website
Project Status Next.js Tailwind CSS Supabase

Welcome to Potentia , a modern and user-friendly website designed to introduce a Bitcoin mining company to the world. This project aims to educate users about Bitcoin mining, showcase mining facilities interactively, and provide real-time data and tools to engage with the Bitcoin ecosystem.

Table of Contents
Overview
Features
Tech Stack
Directory Structure
Getting Started
Prerequisites
Installation
Environment Variables
Scripts
Contributing
License
Contact
Overview
The Potentia website is built using Next.js and features a sleek black-themed design powered by Tailwind CSS . It integrates Supabase for database management and spatial queries, and leverages Blockchain APIs to fetch real-time Bitcoin mining stats. The website also includes interactive features like maps, charts, and calculators to enhance user engagement.

Features
Home Page : A dynamic introduction to Potentia with animations and a clear mission statement.
About Page : Information about the company, team members, and testimonials from successful miners.
Facilities Map Page : Interactive map showcasing mining facilities globally.
Marketplace Page : Real-time Bitcoin mining stats and a profitability calculator.
Learning Page : Educational resources to help users understand Bitcoin mining.
Blog Page : Articles and updates about Bitcoin mining trends.
Contact Page : Contact form and office location details.
Newsletter Signup : Keep users updated with the latest news and insights.
Tech Stack
Frontend :
Next.js (App Router)
Tailwind CSS + ShadCN UI
Framer Motion (Animations)
Mapbox GL JS (Interactive Maps)
Recharts (Data Visualization)
Backend :
Supabase (PostgreSQL + PostGIS)
Next.js API Routes
Data Sources :
Blockchain APIs (BTC.com, Blockchair, CoinGecko)
Hosting :
Vercel (Frontend + API Hosting)
Supabase (Database Hosting)
Development Tools :
ESLint + Prettier (Code Quality)
Husky + Lint-Staged (Pre-commit Hooks)
Directory Structure
Copy
1
2
3
4
5
6
7
8
9
10
11
12
potentia-web/
├── app/                     # App Router pages and layouts
├── components/              # Reusable UI components
├── styles/                  # Global styles (Tailwind CSS + Custom)
├── utils/                   # Utility functions (e.g., Supabase client)
├── public/                  # Static assets (images, fonts, favicon)
├── .husky/                  # Git hooks (e.g., pre-commit)
├── .env.local               # Environment variables
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js : v18.x LTS or later (Download Node.js )
npm : v8.x or later (comes with Node.js)
Git : Latest version (Download Git )
Installation
Clone the repository:
bash
Copy
1
2
git clone https://github.com/your-username/potentia-web.git
cd potentia-web
Install dependencies:
bash
Copy
1
npm install
Set up environment variables (see Environment Variables ).
Start the development server:
bash
Copy
1
npm run dev
Open http://localhost:3000 in your browser to view the app.
Environment Variables
Create a .env.local file in the root directory and add the following variables:

env
Copy
1
2
3
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_BLOCKCHAIN_API_KEY=your-blockchain-api-key
Replace your-supabase-url and your-supabase-anon-key with your Supabase credentials.
Replace your-blockchain-api-key with your Blockchain API key (e.g., from BTC.com or CoinGecko).
Scripts
npm run dev
Starts the development server on
localhost:3000
.
npm run build
Builds the app for production.
npm start
Starts the production server.
npm run lint
Runs ESLint to check for code quality issues.
npm run format
Formats the code using Prettier.
Contributing
We welcome contributions! To contribute to this project:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeatureName).
Commit your changes (git commit -m "Add YourFeatureName").
Push to the branch (git push origin feature/YourFeatureName).
Open a pull request.
Please ensure your code adheres to the project's coding standards and passes all linting checks.

License
This project is licensed under the MIT License . See the LICENSE file for details.

Contact
For questions or feedback, feel free to reach out:

Email : your-email@example.com
GitHub : @your-username
Website : Potentia Website
Thank you for checking out Potentia ! We hope this project serves as a valuable resource for learning and engaging with Bitcoin mining.

Additional Notes
If you’re new to any of the tools used in this project, refer to their official documentation:
Next.js Documentation
Tailwind CSS Documentation
Supabase Documentation
Mapbox GL JS Documentation
Recharts Documentation