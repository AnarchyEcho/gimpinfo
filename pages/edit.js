import {useSession} from 'next-auth/client'
import Link from 'next/link'

import Login from '../Components/Login'

export default function Edit() {
  const [session, loading] = useSession()

  if (loading) {
    return (
    <div>
      <p>Loading...</p>
    </div>
    )
  }

  if (!session) {
    return (
      <div>
        <Link href="/">Home</Link>
        <p>You are not logged in.</p>
        <Login />
      </div>
    )
  }

  return (
    <>
      <Link href="/">Home</Link>
      <p>You are logged in</p>
      <Login />
    </>
  )
}