"use client";

import dynamic from "next/dynamic";
import { useNavbar } from "@/context/NavBarContext";
import { useEffect } from "react";

const FlatMap3D = dynamic(() => import("@/components/FlatMap3D"), {
  ssr: false, 
});

export default function Facilities() {
  const { setSticky } = useNavbar();
  useEffect(() => {
    setSticky(false);
    return () => setSticky(true); 
  }, [setSticky]);

  return (
    <div className="min-h-screen bg-zinc-900">
      <FlatMap3D />
    </div>
  );
}