"use client";

import dynamic from "next/dynamic";
import { useNavbar } from "@/context/NavBarContext";
import { useEffect } from "react";

// Dynamically import MapboxMap (FlatMap3D) with SSR disabled
const FlatMap3D = dynamic(() => import("@/components/FlatMap3D"), {
  ssr: false, // Ensures it only runs on the client
});

export default function Facilities() {
  const { setSticky } = useNavbar();
  useEffect(() => {
    setSticky(false);
    return () => setSticky(true); // Reset on unmount
  }, [setSticky]);

  return (
    <div className="min-h-screen bg-zinc-900">
      <FlatMap3D />
    </div>
  );
}