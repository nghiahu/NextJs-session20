import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()

  if (!user) return <div>Chưa đăng nhập</div>

  return <div>
    <div>Họ và tên: {user?.fullName}</div>
    <div>Email: {user.emailAddresses[0].emailAddress}</div>
  </div>
}