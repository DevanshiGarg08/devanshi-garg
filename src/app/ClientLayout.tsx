"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isResumePDF = pathname === "/resume/pdf";

  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!sessionStorage.getItem("hasVisited")) {
      sessionStorage.setItem("hasVisited", "true");
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    }
  }, []);

  if (!isClient) return null;

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <>
      {!isResumePDF && <Navbar />}
      {children}
    </>
  );
}
