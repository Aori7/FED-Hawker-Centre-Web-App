# HawkerSG — Hawker Centre Management & Ordering Web App

## Overview
HawkerSG is a responsive web application that improves the digital experience of Singapore hawker centres. Patrons can browse hawker centres, view stalls/menus, add items to cart, checkout with payment selection, and store orders in Firebase.  
The system is designed to support multiple roles (**Patron, Operator, Vendor, NEA Officer**) for future expansion into a complete hawker centre management platform.

---

## Team Members Contribution & Responsibilities

### Ada (Patron + Core System)
Implemented the main patron experience and core integrations:
- UI/UX + theme styling across pages
- Hawker centre listing (API data)
- Interactive map feature (Leaflet)
- Stall + menu browsing
- Cart management (add/remove/update qty)
- Checkout + payment method selection (PayNow / Credit-Debit / NETS)
- Order saving to Firestore
- Guest checkout supported (orders stored with guest ID)
- Contact Us form stored into database (feedback/complaints/suggestions)
- Responsive design (desktop + mobile)
- Swiper carousel integration

### Calista (Operator)
Operator-side features:
- Operator Home (Announcements panel)
- Hawker Centre Management (dropdown + details card)
- Interactive Map (Leaflet) with marker + recenter on selection
- Performance Metrics Dashboard (Canvas charts + metric selector)
  - Profit & Loss
  - Reviews
  - Hygiene Grade
- Schedule Planning (Cleaning + Maintenance calendars)
  - Month navigation + click-to-add events
- Operator Profile Management
  - Editable profile data
  - localStorage persistence (demo leasing overview actions included)

### Dayana (NEA Officer)
- **Pending / TBC** (features not submitted yet)

### Rui Min (Vendor)
Vendor-side interface and operational features for stall owners:

- **Vendor Home / Dashboard**
  - Stall selection dropdown (supports multiple stalls per vendor)
  - Stall information display (address, operating hours, cuisine type, rating)
  - Hygiene grade display (UI placeholder)
  - Order overview visualisation using **Chart.js**
    - Pie chart for order types (Dine-in / Pickup / Delivery)
    - Time-based filters (Today / This Week)
  - Updates & notices panel (e.g. announcements)

- **Vendor Orders Management**
  - Orders table layout displaying:
    - Order ID, date, customer, order type, total amount, payment method, order status
  - Interactive filtering:
    - Order type (Dine-in / Pickup / Delivery)
    - Order status (Complete / Incomplete)
    - Time sorting (Newest / Oldest)
  - JavaScript structure prepared for dynamic order rendering

- **Vendor Promotions Management**
  - Promotions page with:
    - Active and inactive promotions sections
    - Promotion cards displaying promo code, validity period, and description
    - Dropdown menu for promotion actions (Edit / Remove)
  - Expandable “Affected Items” lists for each promotion
  - Sticky “Add Promotion” button (UI prepared for future logic)


---

## Key Features

### Patron (Registered User) `Ada`
- Browse hawker centres, stalls, and menus
- Cart management (add/remove/update)
- Checkout flow + payment method selection
- Orders stored in Firestore under user ID
- Order history sidebar (loads from Firestore)
- Favourite hawker centres *(implemented / extendable)*
- Submit feedback/complaints/suggestions via Contact Us form

### Patron (Guest User) `Ada`
- Browse hawker centres, stalls, and menus
- Cart management + checkout supported
- Orders stored in Firestore with:
  - `userType: "guest"`
  - `guestId: "guest-<timestamp>"`
- Guest users **cannot view order history** 

### Operator `Calista`
- Operator dashboard for hawker centre operators
- Select and manage hawker centres via dropdown
- View hawker centre details in structured cards
- Interactive map using Leaflet
- Performance metrics dashboard with chart visualisations:
  - Profit & Loss
  - Reviews
  - Hygiene Grade
- Schedule planning system:
  - Cleaning and maintenance calendars
  - Month navigation
  - Click-to-add events
- Operator profile management:
  - Editable profile information
  - Data persistence using localStorage 


### Vendor `Rui Min`
- Vendor dashboard for stall owners
- Stall selection dropdown populated from Firebase Realtime Database
- View stall details and basic stall information
- Order management table populated from Firebase Realtime Database
- Filter orders by:
  - Stall
  - Order type (Dine-in / Pickup / Delivery)
  - Order status (Complete / Incomplete)
  - Time (Newest / Oldest)
- Order data displayed in tabular format for monitoring purposes
- Promotions management interface (UI):
  - View active and inactive promotions
  - Expandable affected items list
  - Promotion action menu (Edit / Remove – UI only)
- Customer feedback & complaints interface (UI)
- Vendor-side data currently uses **read-only Firebase retrieval**

### NEA-Officer `Dayana`
-

---

## API Usage

### Data.gov.sg Hawker Centre Dataset
Dataset page:
- https://data.gov.sg/datasets/d_4a086da0a5553be1d89383cd90d07ecd/view

API endpoint used to retrieve the temporary GeoJSON download URL:
- https://api-open.data.gov.sg/v1/public/api/datasets/d_4a086da0a5553be1d89383cd90d07ecd/poll-download

#### CORS Handling 
Direct client-side calls to Data.gov.sg can be blocked by browser CORS policies.  
Solution used in this project:
- GeoJSON hawker dataset is stored in **Firebase Realtime Database**
- App fetches hawker data from Firebase to avoid CORS issues

This preserves real dataset usage while ensuring the web app works in-browser.

---

## Firebase Usage

### Firebase Realtime Database
`Used by Ada`
- Stores Hawker Centres GeoJSON dataset 

`Used by Rui Min`
- Firebase Realtime Database is used for vendor-side data retrieval
- Vendor pages retrieve:
  - Stall information (for stall selection dropdown)
  - Order records (for order table and filtering)
- Firebase is currently used in a **read-only** manner

### Firebase Authentication
`Used by Ada`
- Customer login + registration (email/password)

### Firestore Database
`Used by Ada`
- Orders (`orders` collection)
  - stored for registered users by `userId`
  - stored for guests by `guestId`
- Favourites *(planned / extendable)*
- Contact submissions (feedback/complaints/suggestions)

---

## Design Decisions
- Theme: orange + beige palette (food-friendly theme)
  - https://colorhunt.co/palette/faf3e1f5e7c6fa8112222222
- Google Font used: Archivo
  - https://fonts.google.com/specimen/Archivo
- Consistent components across pages (buttons, cards, layout)
- Responsive styling for desktop + mobile
- Carousel used for better visual experience (Swiper.js)

---

## Libraries & Tools
- Leaflet.js (interactive maps) (Ada)
  - https://leafletjs.com/examples/quick-start/
- Swiper.js (carousel) (Ada)
  - https://swiperjs.com/get-started
- Google Material Symbols (icons) (Ada)
  - https://fonts.google.com/icons
- Operator calendar inspiration (Calista)
  - https://fullcalendar.io/
- Chart.js (Rui Min)
  - https://www.chartjs.org/
---

## Testing
Validation + QA checks used:
- W3C Markup Validation — https://validator.w3.org/
- W3C CSS Validation — https://jigsaw.w3.org/css-validator/
- W3C Link Checker — https://validator.w3.org/checklink
- Color Contrast Checker — https://color.a11y.com/Contrast/
- Alt Text Checker — https://rushax.com/tools/alt-tag-checker/

---

## Folder / File Summary

### Ada (Patron + Core)
- `index.html`
- `about-us.html`
- `contact-us.html`
- `credit.html`
- `login.html`
- `main-hawkers.html`
- `order-hawker.html`
- `order-stall.html`
- `order-menuitems.html`
- `css/style.css`
- `css/login.css`
- `js/auth.js`
- `js/login.js`
- `js/script.js`
- `js/leaflet.js`
- `js/hawker-centre.json`

### Calista (Operator)
- `operator-hawker.html`
- `operator-main.html`
- `oeprator-profile.html`
- `operator-schedule.html`
- `js/operator-hawker.js`
- `js/operator-profile.js`
- `js/operator-schedule.js`

### Dayana (NEA Officer)
- `nea-dashboard.html`
- `nea-feedback.html`
- `nea-inspection.html`
- `nea-main.html`
- `js/nea-common.js`
- `js/nea-dashboard.js`
- `js/nea-feedback.js`
- `js/nea-inspection.js`
- `js/nea.js`

### Rui Min (Vendor)
- `vendor-feedback.html`
- `vendor-home.html`
- `vendor-menu.html`
- `vendor-notices.html`
- `vendor-orders.html`
- `vendor-profile.html`
- `vendor-promotion.html`
- `vendor-style.css`
- `js/vendor-order-script.js`
- `js/vendor-promotions-script.js`

---

## Future Enhancements
- Move stall + menu dataset into Firebase 
- Full patron account management page (view favourites + order history in one place)
- Vendor + NEA real authentication flow
- Improve footer + polish UI sections
- More advanced analytics dashboards and admin tools

---

README written by **Ada**