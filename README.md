# Coding Challenge: Next.js Remote Job Board

## Project Overview
Your objective is to build a modern, high-performance job listing application using **Next.js (App Router)**. The application will consume the **Jobicy API** to display remote job listings and allow users to filter results by geography and industry.

The goal is to demonstrate your proficiency in:
- Next.js Server/Client component architecture.
- URL-driven state management.
- Integration with third-party APIs.
- Clean, type-safe TypeScript implementation.
- Figma: https://www.figma.com/design/i3Faf761hsF53xUBV0y9zV/test-copy?node-id=0-1&t=BKL4YIqNijUNywAn-1

---

## 🛠 Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Data Fetching:** TanStack Query (React Query)
- **Styling:** Vanilla CSS or Tailwind CSS
- **API:** [Jobicy V2 Remote Jobs](https://jobicy.com/api/v2/remote-jobs)

---

## 🎯 Core Requirements

### 1. Job Listing Page
- Display jobs as responsive card components.
- Each job card **must** include:
  - Job title & Company logo
  - Job type & Career level
  - A short excerpt of the description
  - A link to the original job post

### 2. Filtering System
- Implement filters for **Geography (jobGeo)** and **Industry**.
- **URL Synchronization:** All filter states must be reflected in the URL query parameters. The page state should be fully restorable from the URL.
- **Validation:** Only allow the specific predefined values for filtering (see [Filter Values](#filter-values) below). Invalid values should handle errors gracefully (e.g., 400 response from your proxy).

### 3. Interactive Features
- **Random Highlight:** On each page render/load, select one job card randomly and apply a "featured" visual style (blue highlight).
- **Dynamic Badges:** Randomly assign "Trending" and "Recommended" badges to job cards to simulate specialized listing data.

### 4. Technical Constraints
- **Server Route Handler:** Implement `app/api/jobs/route.ts` to proxy requests to Jobicy. This layer should handle validation and error mapping.
- **Component Strategy:** Use Server Components by default. Use "use client" only where state or interactivity (filters, React Query) is strictly necessary.
- **Shared State:** Ensure the UI remains in sync with the URL at all times.

---

## 📊 Filter Values Reference

### Geography (`jobGeo`)
`apac`, `emea`, `latam`, `usa`, `uk`, `canada`, `germany`, `france`, `hungary`, `austria`, `belgium`, `brazil`, `bulgaria`, `china`, `croatia`, `cyprus`, `czechia`, `denmark`, `estonia`, `europe`, `finland`, `greece`, `ireland`, `israel`, `italy`, `japan`, `latvia`, `lithuania`, `mexico`, `netherlands`, `new-zealand`, `norway`, `philippines`, `poland`, `portugal`, `romania`, `serbia`, `singapore`, `slovakia`, `slovenia`, `south-korea`, `spain`, `sweden`, `switzerland`, `thailand`, `turkiye`, `united-arab-emirates`, `ukraine`, `vietnam`, `argentina`, `australia`, `hong-kong`, `costa-rica`.

### Industry (`industry`)
`business`, `copywriting`, `healthcare`, `education`, `admin-support`, `supporting`, `data-science`, `design-multimedia`, `admin`, `accounting-finance`, `hr`, `marketing`, `management`, `dev`, `seller`, `seo`, `smm`, `engineering`, `technical-support`, `web-app-design`.

---

## ✅ Evaluation Criteria
- **Architecture:** Proper separation of client and server concerns.
- **TypeScript:** Strict typing for API responses and filter states.
- **URL Logic:** Deep-linking support and browser history integration for filters.
- **UI/UX:** Handling of loading skeletons, empty states, and API errors.
- **Code Quality:** Readability, modularity, and adherence to modern React patterns.

---

## 🚀 Getting Started
1. Initialize a new Next.js project.
2. Set up TanStack Query.
3. Review the [Jobicy Documentation](https://jobicy.com/jobs-rss-feed) for API details.