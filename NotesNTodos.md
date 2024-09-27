# Project Notes & Todos

## Project Notes

**Chosen Project Structure** = storing project files outside of `app dir`.

## Project Todos

- Initial Setup & Test
  - [x] Setup Tailwind
  - [x] Setup FontFamily
  - [x] Initial Cleanup, Setup & Test-Run
  - [x] Create a button component class & Test it
  - [x] Git Setup
  - [x] Vercel Setup
- [x] Create Header Component
- [x] Create Footer Component
- [x] Create CTA Section Component
- [x] Create Address Component
- [x] Initial Homepage Development
  - [x] Testimonial
  - [x] Our Story
  - [x] What we serve
  - [x] Hero
- [x] Planning & Design of Dashboard-pages
- [x] Write DB SCHEMA
- [x] Setup Auth
- [x] Dashboard development
- [x] Finish PROD Schema migration
- [x] Fill out the data on PROD
- [x] /menus page development
- [x] /menus/[food-type] page development
- [x] Implement Subscribe-For-Updates functionality (Adding user-email to mailchimp-lists)
- [x] Reserve-A-Table page development
- [x] /dashboard/bookings page development
- [x] Terms & Privacy-Policy pages development
- [x] Rendering & Cache Management
- [x] MAKE Responsive, Accessible & SEO optimized

## Routes & Rendering:

- / - static x
- /book-a-table - static x
- /menus - should be static but should be revalidated by server-actions related to menus or food-categories x
- /menus/[foodType] - SSG & revalidated by server-actions related to menus or food-categories x
- all api's are dynamic should not be cached x
- /app-sign-in & up are - static x
- /dashboard/\* - dynamic x
