import { useSession, signIn, signOut } from "next-auth/client";
import Link from 'next/link'
import Head from 'next/Head'
import { QuestTool } from "osrs-quest-tool";

export default function Edit() {
  const [session, loading] = useSession()

  const tool = new QuestTool();
  const toolJson = JSON.parse(JSON.stringify(tool));
  const quests = Object.keys(toolJson.questObject);


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
      {quests.map( x =>
        <div key={x}>
            <p>{x}</p>
        </div>
      )}
    </>
  )
}