import { useSession, signIn, signOut } from "next-auth/client";
import Link from 'next/link'

export default function Edit() {
  const [session, loading] = useSession()

  const Login =
        <div>
            {!session ? (
                <>
                    <button onClick={() => signIn("github")}>
                        Sign in with Github
                    </button>
                </>
            ) : (
                <>
                    <button onClick={signOut}>Logout</button> <br />
                </>
            )}
        </div>;

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
        {Login}
      </div>
    )
  }

  return (
    <>
      <Link href="/">Home</Link>
      <p>You are logged in</p>
      {Login}
    </>
  )
}