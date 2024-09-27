import { FoodTypesEnumType } from "@/utils/types";

const myRoutes = {
  home: "/",
  authorURL: "https://danidevstudio.com/",
  dashboard: "/dashboard",
  bookings: "/dashboard/bookings",
  signUp: "/app-sign-up",
  signIn: "/app-sign-in",
  apis: {
    adminFoodCat: "/api/protected/foodCategories",
    adminFood: "/api/protected/foods",
    adminBookings: "/api/protected/bookings",
  },
  menus: "/menus",
  submenu: (fdTyp: FoodTypesEnumType) => `/menus/${fdTyp.toLowerCase()}`,
  bookATable: "/book-a-table",
  privacyPolicy: "/privacy-policy",
  termsNConditions: "/terms-n-conditions",
} as const;

export default myRoutes;

export const menuFolderPath = "/(public-pages)/menus" as const;
