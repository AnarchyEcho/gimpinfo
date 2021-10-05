import { useSession, signIn, signOut } from "next-auth/client";
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps(context) {
    const questsFetch = await fetch('https://gimpinfo.vercel.app/api/questsEcho')
    const quests = await questsFetch.json()
    const questsArray = Object.keys(quests.echo)

    return {
        props: {
            quests,
            questsArray
        }
    }
}

export default function Edit({ quests, questsArray }) {
  const [session, loading] = useSession()

  let questNames = []
  for (let i = 0; i < questsArray.length; i++) {
    questNames.push(quests.echo[questsArray[i]].name)
  }

  const Header = 
        <Head>
          <title>GIMP Edit</title>
          <meta name="description" content="Created by Echo and Tom" />
          <link rel="icon" href="/GimIconTransparent.png" />
          <meta property="og:image" content="/GimIconTransparent.png" />
        </Head>

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
      {Header}
      <p>Loading...</p>
    </div>
    )
  }

  if (!session) {
    return (
      <div>
        {Header}
        <Link href="/">Home</Link>
        <p>You are not logged in.</p>
        {Login}
      </div>
    )
  }

  return (
    <>
      {Header}
      <Link href="/">Home</Link>
      <p>You are logged in</p>
      {Login}
      {questNames.map( x =>
        <div key={x}>
            <p>{x}</p>
        </div>
      )}
    </>
  )
}