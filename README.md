# 🛒 AutomationExercise – Playwright Automation Framework

[![Playwright Tests](https://img.shields.io/badge/tested%20with-Playwright-2EAD33?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions)](https://github.com/features/actions)
[![Allure Report](https://img.shields.io/badge/report-Allure-orange)](https://allurereport.org/)

End-to-end and API test automation suite for **[AutomationExercise](https://automationexercise.com/)**, a demo e-commerce web application. Built with **Playwright + TypeScript**, following industry-standard practices like the **Page Object Model (POM)**, custom **fixtures**, **data-driven testing**, and full **CI/CD integration**.

---

## 📌 Project Overview

This repository contains a scalable, maintainable UI + API test automation framework designed to validate core e-commerce workflows — user authentication, product browsing, cart management, checkout, order placement, and backend product APIs.

The framework is built to reflect real-world QA automation practices used in production teams, making it a strong showcase of automation engineering skills.

---

## 🚀 Key Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Page Object Model (POM)** | UI locators and actions are encapsulated in dedicated page classes (`LoginPage`, `RegisterPage`, `CheckoutPage`) for reusability and easy maintenance |
| 2 | **Custom Fixtures** | Centralized test setup/teardown logic via `Fixture.ts`, injecting page objects directly into tests — no repetitive instantiation |
| 3 | **Data-Driven Testing** | Login tests run against multiple datasets (valid/invalid credentials) using external test data, avoiding hardcoded values |
| 4 | **CI/CD Integration** | GitHub Actions workflow triggers the full test suite automatically on every push/pull request |
| 5 | **Allure & HTML Reporting** | Rich, interactive Allure reports plus Playwright's built-in HTML report for test result visualization and debugging |
| 6 | **API Testing** | Dedicated API test suite validating product endpoints independently of the UI layer |
| 7 | **TypeScript** | Fully typed codebase for better maintainability, autocompletion, and fewer runtime errors |

---

## 🧰 Tech Stack

- **Language:** TypeScript
- **Test Framework:** [Playwright](https://playwright.dev/) (UI + API)
- **Reporting:** Allure Report, Playwright HTML Report
- **CI/CD:** GitHub Actions
- **Design Pattern:** Page Object Model (POM)
- **Application Under Test:** [automationexercise.com](https://automationexercise.com/)

---

## 📁 Project Structure

```
├── .github/workflows/        # CI pipeline configuration (GitHub Actions)
├── pages/                    # Page Object classes
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── api/                  # API test specs
│   │   └── product.api.spec.ts
│   └── ui/                   # UI test specs
│       ├── auth.spec.ts
│       ├── brand.spec.ts
│       ├── cart.spec.ts
│       ├── categories.spec.ts
│       ├── placeOrder.spec.ts
│       ├── product.spec.ts
│       ├── productReview.spec.ts
│       ├── Recommended.spec.ts
│       ├── RemoveOrder.spec.ts
│       └── scrollip.spec.ts
├── ScreenShot/                # Captured screenshots on failure
├── test-results/              # Raw test run artifacts
├── playwright-report/         # Playwright HTML report output
├── Fixture.ts                 # Custom test fixtures (POM injection)
├── utils.js                   # Shared helper/utility functions
├── playwright.config.ts       # Playwright configuration
├── package.json
└── README.md
```

---

## ✅ Test Coverage

- **Authentication:** Login (data-driven), Registration
- **Product Catalog:** Product listing, brand filtering, category filtering, recommended products
- **Product Details:** Product reviews, scroll interactions
- **Cart & Checkout:** Add to cart, place order, remove order
- **API Layer:** Product API validations independent of UI

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run only UI tests
npx playwright test tests/ui

# Run only API tests
npx playwright test tests/api

# Run in headed mode
npx playwright test --headed

# Run a specific spec file
npx playwright test tests/ui/auth.spec.ts
```

### Viewing Reports

```bash
# Playwright HTML report
npx playwright show-report

# Allure report
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## 🔄 Continuous Integration

Tests are automatically executed on **every push and pull request** via GitHub Actions. The workflow:
1. Installs dependencies and Playwright browsers
2. Executes the full UI + API test suite
3. Generates and uploads the Allure/HTML report as a build artifact

Workflow file: [`.github/workflows`](.github/workflows)

---

## 🎯 What This Project Demonstrates

- Ability to design a **scalable automation architecture** using POM and fixtures
- Strong grasp of **TypeScript** for building type-safe test frameworks
- Experience implementing **data-driven testing** to maximize coverage with minimal code duplication
- Hands-on skill in **UI and API test automation** within a single framework
- Practical knowledge of **CI/CD pipelines** for continuous test execution
- Familiarity with **test reporting tools** (Allure, HTML) for clear stakeholder communication
- Clean, maintainable, and well-organized codebase following real-world QA engineering standards

---

## 👤 Author

**Avishkar More**
📧 Feel free to connect for feedback, collaboration, or questions about this project.

---

## 📄 License

This project is intended for learning and portfolio purposes.
