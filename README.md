# Vans

A van-rental site built to practise React Router 6.4's data APIs: loaders, deferred data, error elements, nested layouts and a host area behind a sign-in. A mock API (Mirage JS) stands in for the backend.

## Features

- **Browse vans** with filters kept in the URL (`useSearchParams`).
- **Van detail pages,** each loaded by its route's loader.
- **Data loading with route loaders,** including deferred data (`defer` and `<Await>`) and per-route error elements.
- **Host area** behind a sign-in: a dashboard, income, reviews and the host's own vans, each with nested tabs for details, pricing and photos. Visiting it signed out redirects to the sign-in page and back.
- **Mock backend:** Mirage JS serves the vans and the sign-in from inside the browser.

## Stack

React 18 · React Router 6.4 · Mirage JS · MUI · Create React App

## Project structure

```
src/
├─ van/              vans list, van info, about page
├─ vanIntroduction/  host van tabs: details, pricing, photos
├─ host/             host dashboard, income, reviews, host's vans
├─ logIn/            sign-in page
├─ routeLinks/       layout, header, footer, 404
├─ error/            route error element
├─ api.js            data fetching for loaders
└─ server.js         Mirage JS mock API
```

## Run it locally

```bash
git clone https://github.com/motlagh-parsa/Vans.git
cd Vans
npm install
npm start          # http://localhost:3000
```
