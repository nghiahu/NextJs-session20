"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isSignedIn) {
      alert("Chưa đăng nhập");
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  const handleSignOut = () => {
    signOut();
    router.push("/sign-in");
  };

  if (!isSignedIn) return null;

  return (
    <div className="m-4">
      <button className="p-3 bg-blue-950 text-white rounded-md"onClick={handleSignOut}>Đăng xuất</button>
    </div>
  );
}
