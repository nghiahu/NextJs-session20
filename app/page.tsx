"use client"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function page() {
  const { isSignedIn, userId, signOut } = useAuth();
  const route = useRouter();
  const handleSignIn = () => {
    route.push("/sign-in")
  }
  return (
    <div className="m-4">
      {isSignedIn? 
      <div>
        <button className="p-3 bg-blue-950 text-white rounded-md" onClick={() => signOut()}>Đăng xuất</button>
        <div className="text-blue-950 text-xl font-bold">Trang đã đăng nhập</div>
      </div> : 

      <div>
        <button className="p-3 bg-blue-950 text-white rounded-md" onClick={handleSignIn}>Đăng nhập</button>
        <div className="text-blue-950 text-xl font-bold">Trang đã đăng xuất</div>
        </div>}
    </div>
  )
}
