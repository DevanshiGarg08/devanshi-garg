"use client";

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false); // Start with false to avoid SSR mismatch
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  useEffect(() => {
    setIsClient(true); // Ensure client rendering
    if (!sessionStorage.getItem("hasVisited")) {
      sessionStorage.setItem("hasVisited", "true");
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    }
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  return <>{loading ? <Preloader setLoading={setLoading} /> : children}</>;
}
