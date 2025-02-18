

---

# **Potentia - Bitcoin Mining Company Website**

![Project Status](https://img.shields.io/badge/status-active-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-13-blueviolet) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue) ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-orange)

Welcome to **Potentia**, a modern and user-friendly website designed to introduce a Bitcoin mining company to the world. This project aims to educate users about Bitcoin mining, showcase mining facilities interactively, and provide real-time data and tools to engage with the Bitcoin ecosystem.

---

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Directory Structure](#directory-structure)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
6. [Environment Variables](#environment-variables)
7. [Scripts](#scripts)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## **Overview**

The **Potentia** website is built using **Next.js** and features a sleek black-themed design powered by **Tailwind CSS**. It integrates **Supabase** for database management and spatial queries, and leverages **Blockchain APIs** to fetch real-time Bitcoin mining stats. The website also includes interactive features like maps, charts, and calculators to enhance user engagement.

---

## **Features**

- **Home Page**: A dynamic introduction to Potentia with animations and a clear mission statement.
- **About Page**: Information about the company, team members, and testimonials from successful miners.
- **Facilities Map Page**: Interactive map showcasing mining facilities globally.
- **Marketplace Page**: Real-time Bitcoin mining stats and a profitability calculator.
- **Learning Page**: Educational resources to help users understand Bitcoin mining.
- **Blog Page**: Articles and updates about Bitcoin mining trends.
- **Contact Page**: Contact form and office location details.
- **Newsletter Signup**: Keep users updated with the latest news and insights.

---

## **Tech Stack**

- **Frontend**:
  - Next.js (App Router)
  - Tailwind CSS + ShadCN UI
  - Framer Motion (Animations)
  - Mapbox GL JS (Interactive Maps)
  - Recharts (Data Visualization)

- **Backend**:
  - Supabase (PostgreSQL + PostGIS)
  - Next.js API Routes

- **Data Sources**:
  - Blockchain APIs (BTC.com, Blockchair, CoinGecko)

- **Hosting**:
  - Vercel (Frontend + API Hosting)
  - Supabase (Database Hosting)

- **Development Tools**:
  - ESLint + Prettier (Code Quality)
  - Husky + Lint-Staged (Pre-commit Hooks)

---

## **Directory Structure**

```
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
```

---

## **Getting Started**

### **Prerequisites**

Before you begin, ensure you have the following installed:
- **Node.js**: v18.x LTS or later ([Download Node.js](https://nodejs.org/))
- **npm**: v8.x or later (comes with Node.js)
- **Git**: Latest version ([Download Git](https://git-scm.com/))

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/potentia-web.git
   cd potentia-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the app.

---

## **Environment Variables**

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_BLOCKCHAIN_API_KEY=your-blockchain-api-key
```

- Replace `your-supabase-url` and `your-supabase-anon-key` with your Supabase credentials.
- Replace `your-blockchain-api-key` with your Blockchain API key (e.g., from BTC.com or CoinGecko).

---

## **Scripts**

| Command         | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`   | Starts the development server on `localhost:3000`. |
| `npm run build` | Builds the app for production.                   |
| `npm start`     | Starts the production server.                    |
| `npm run lint`  | Runs ESLint to check for code quality issues.    |
| `npm run format`| Formats the code using Prettier.                 |

---

## **Contributing**

We welcome contributions! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add YourFeatureName"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and passes all linting checks.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [@your-username](https://github.com/your-username)
- **Website**: [Potentia Website](https://your-website.com)

---

Thank you for checking out **Potentia**! We hope this project serves as a valuable resource for learning and engaging with Bitcoin mining.

---

### **Additional Notes**
- If you’re new to any of the tools used in this project, refer to their official documentation:
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
  - [Supabase Documentation](https://supabase.com/docs)
  - [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/api/)
  - [Recharts Documentation](https://recharts.org/en-US)
