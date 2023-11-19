import React from "react";
import NavBar from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
}
