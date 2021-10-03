import {useSession} from 'next-auth/client'
import Link from 'next/link'

import Login from '../components/Login'

export default function Edit() {
  const [session, loading] = useSession()

  if (loading) {
    return (
    <div>
      <p>Loading...</p>
      <Link href="/" >Home</Link>
    </div>
    )
  }

  if (!session) {
    return (
      <div>
        <p>You are not logged in.</p>
        <Link href="/" >Home</Link>
        <Login />
      </div>
    )
  }

  return (
    <>
      <p>
        You are logged in as
      </p>
      <Link href="/" >Home</Link>
      <Login />
    </>
  )
}