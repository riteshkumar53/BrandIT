# DukaanGrowth

A responsive full-stack-style frontend prototype for BRANDIT 3.0. Shopkeepers manage products and stock; customers discover sample neighbourhood shops, browse catalogues, and submit product enquiries. All demo data persists in browser LocalStorage—there is no backend, paid API, or real messaging service.

## WEBSITE: https://dukaangrowth.vercel.app/

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints (usually `http://localhost:5173`). For a production build:
```bash
npm run build
npm run preview
```

## Main routes
- `/` — landing page
- `/login` — simulated shopkeeper demo access
- `/dashboard` — overview and stock alerts
- `/dashboard/products` — add, edit, search, filter and delete products
- `/dashboard/inventory` — quick stock controls and low-stock threshold
- `/dashboard/catalogue` — public catalogue link and preview
- `/dashboard/customers` — customer enquiries
- `/dashboard/settings` — shop profile settings
- `/explore` — search shops and products across the demo network
- `/catalogue/sharma` — public catalogue for Sharma General Store
- `/catalogue/city-stationery`, `/catalogue/fresh-mart`, `/catalogue/student-supplies` — other public catalogues

## Features
- React + Vite + JavaScript, React Router, Tailwind CSS utility setup, and custom responsive CSS.
- Four fictional sample shops with realistic Indian retail products and INR formatting.
- Product create/update/delete with input validation and delete confirmation.
- Stock increase/decrease/set controls; negative stock is prevented.
- Configurable low-stock threshold and live status badges.
- Public catalogues with category filters, search, product details, and customer enquiry forms.
- Enquiries persist locally and appear in the shopkeeper Customers page; messages can be marked read.
- Shop settings persist and update the public catalogue.
- Demo mode requires no password. The Login page explicitly describes simulated authentication.
- Responsive mobile navigation and dashboard sidebar.
- Empty states, status messages, accessible labels, keyboard Escape to close dialogs, and a print inventory action.

## Demonstration flow
1. Open `/` and select **Try Demo**.
2. On the dashboard, choose **Add product** or open Products.
3. Add `Engineering Drawing Sheet`, category `Drawing Supplies`, price `25`, quantity `3`.
4. Open Inventory and verify the new stock count.
5. Open My Catalogue or visit `/catalogue/sharma` to find the product.
6. Set its quantity to `0` in Inventory; the catalogue will show it as out of stock.
7. In the catalogue, choose **Enquire** on another in-stock item and submit fictional customer details.
8. Return to Customers in the dashboard to see the saved enquiry.

## Reset demo data
LocalStorage retains edits between refreshes. To restore the seed data, open browser developer tools → Application/Storage → Local Storage for this origin, delete keys beginning with `dg_`, and refresh.

## Limitations
- This is a frontend prototype; LocalStorage is per browser/device and is not a shared database.
- Login is simulated and is not secure authentication.
- Enquiries are stored locally; no email, SMS, notifications, or real orders are sent.
- The catalogue URL is a local route on the running app, not a hosted public URL until deployed.
- QR generation is not included; the catalogue link can be copied and shared, and QR creation can be added later without changing the data model.
- Sample locations are labels only; no GPS, geolocation, maps, or distance claims are made.
- Google Fonts is an optional visual enhancement; the app falls back to system fonts if unavailable.
