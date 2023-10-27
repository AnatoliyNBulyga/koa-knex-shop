import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { onAuthStateChanged, User } from "firebase/auth";

import Home from "../pages/home";
import MainLayout from "../layouts/main";
import Product from "../pages/product";

const AppRouter = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user, "user");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
      ],
    },
    {
      path: "*",
      element: <div>No matches!</div>,
    },
  ]);

  if (isLoading) return <div>Loading...</div>;

  return <RouterProvider router={router} />;
};

export default AppRouter;
