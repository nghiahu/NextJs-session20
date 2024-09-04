"use client"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function page() {
    const { isSignedIn, userId, signOut } = useAuth();
    const router = useRouter();
    if (!isSignedIn) {
        alert("vui lòng đăng nhập")
        router.push("/sign-in");
    }
  
    return (
      <div>
          Protected Router
      </div>
    );
}


