# Products Filter & Sorting App

This project is a React + TypeScript app that displays products fetched from an API. It allows users to **filter, search, and sort products**. The app uses **Redux Toolkit** for state management and **RTK Query** for API requests.

## Features

- Fetch products from API using RTK Query.
- Search products by name.
- Filter products by category.
- Sort products by price (ascending or descending).
- Filter products by rating.
- Display "No products found" if no item matches the filters.
- Fully typed with TypeScript.
- Responsive UI using Tailwind CSS.

## Project Structure

```bash
src/
├─ api/
│ └─ apiSlice.ts # RTK Query setup for API requests
│
├─ components/
│ ├─ filters/
│ │ ├─ FilterByCategory.tsx
│ │ ├─ FilterBySearching.tsx
│ │ ├─ SortPrice.tsx
│ │ └─ FilterByRating.tsx
│ │
│ ├─ common/
│ │ └─ Header.tsx
│ │
│ ├─ products/
│ │ ├─ Products.tsx
│ │ └─ ProductCard.tsx
│ │
│ ├─ cart/
│ │ └─ ShoppingCart.tsx
│ │
│ └─ wishlist/
│ └─ WishList.tsx
│
├─ features/
│ ├─ cart/
│ │ └─ cartSlice.ts
│ │
│ └─ filters/
│ └─ filtersSlice.ts
│
├─ store/
│ ├─ store.ts
│ └─ hooks.ts # Typed hooks for Redux
│
├─ layout/
│ └─ MainLayout.tsx
│
├─ services/
│ └─ apiSlice.ts
│
├─ types/
│ └─ Product.ts # Product interface
│
├─ utils/
│ └─ filterUtils.ts
│
└─ App.tsx


## Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm run dev

Usage

Use the search bar to filter products by title.

Select a category to filter products by category.

Sort products by price using the dropdown.

Use the rating filter to only show products with a minimum rating.

If no products match your filters, a "No products found" message is displayed.

Tech Stack

React 18 + TypeScript

Redux Toolkit + RTK Query

Tailwind CSS

Vite