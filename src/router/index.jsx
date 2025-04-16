import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingLayout from "@/layouts/landing-layout/LandingLayout";
import DefaultLayout from "@/layouts/default-layout/DefaultLayout";

import LandingPage from "@/pages/landing-page/LandingPage";
import DashboardPage from "@/pages/dashboard-page/DashboardPage";
import AboutPage from "@/pages/about-page/AboutPage";
import NotFoundPage from "@/pages/not-found-page/NotFoundPage";

// Define routes using createBrowserRouter (recommended for v6.4+)
const router = createBrowserRouter([
  {
    // Routes using LandingLayout
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      // Add other landing-style routes here if needed
      // { path: '/features', element: <FeaturesPage /> },
    ],
  },
  {
    // Routes using DefaultLayout (Sidebar + Navbar)
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // Add other default-layout routes here
      // { path: '/settings', element: <SettingsPage /> },
    ],
  },
  {
    // Catch-all route for 404 Not Found pages
    // This should be outside the layout groups or within a minimal layout
    path: "*",
    element: <NotFoundPage />, // Render the NotFoundPage directly
  },
]);

// Component to provide the router context
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
