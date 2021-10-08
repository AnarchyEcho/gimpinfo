import { useSession, signIn, signOut } from "next-auth/client";
import Link from 'next/link'
import Head from 'next/head'


export async function getStaticProps(context) {
   
    const questsFetchEcho = await fetch(`https://gimpinfo.vercel.app/api/questsEcho`)
    const questsEcho = await questsFetchEcho.json()
    const questsArrayEcho = Object.keys(questsEcho.echo)

    const questsFetchFunfun = await fetch(`https://gimpinfo.vercel.app/api/questsFunfun`)
    const questsFunfun = await questsFetchFunfun.json()
    const questsArrayFunfun = Object.keys(questsFunfun.funfun)

    const questsFetchEmerald = await fetch(`https://gimpinfo.vercel.app/api/questsEmerald`)
    const questsEmerald = await questsFetchEmerald.json()
    const questsArrayEmerald = Object.keys(questsEmerald.emerald)

    const questsFetchYb = await fetch(`https://gimpinfo.vercel.app/api/questsYb`)
    const questsYb = await questsFetchYb.json()
    const questsArrayYb = Object.keys(questsYb.yb)

    const questsFetchFixi = await fetch(`https://gimpinfo.vercel.app/api/questsFixi`)
    const questsFixi = await questsFetchFixi.json()
    const questsArrayFixi = Object.keys(questsFixi.fixi)

    return {
        props: {
            questsEcho,
            questsArrayEcho,
            questsFunfun,
            questsArrayFunfun,
            questsEmerald,
            questsArrayEmerald,
            questsYb,
            questsArrayYb,
            questsFixi,
            questsArrayFixi
        }
    }
}

export default function Edit({ questsEcho, questsArrayEcho, questsFunfun, questsArrayFunfun, questsEmerald, questsArrayEmerald, questsYb, questsArrayYb, questsFixi, questsArrayFixi }) {
  const [session, loading] = useSession()

  let questNamesEcho = []
  for (let i = 0; i < questsArrayEcho.length; i++) {
    questNamesEcho.push(questsEcho.echo[questsArrayEcho[i]].name)
  }

  let questNamesFunfun = []
  for (let i = 0; i < questsArrayFunfun.length; i++) {
    questNamesFunfun.push(questsFunfun.funfun[questsArrayFunfun[i]].name)
  }

  let questNamesEmerald = []
  for (let i = 0; i < questsArrayEmerald.length; i++) {
    questNamesEmerald.push(questsEmerald.emerald[questsArrayEmerald[i]].name)
  }

  let questNamesYb = []
  for (let i = 0; i < questsArrayYb.length; i++) {
    questNamesYb.push(questsYb.yb[questsArrayYb[i]].name)
  }

  let questNamesFixi = []
  for (let i = 0; i < questsArrayFixi.length; i++) {
    questNamesFixi.push(questsFixi.fixi[questsArrayFixi[i]].name)
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

      {session.user.name === "KodeAndre" || "Tomkhcoding" ? <p>{session.user.name} is logged in</p> : null}

      {Login}

      {session.user.name === "KodeAndre" ? <div>
        {questNamesEcho.map( (x, i) =>
          <div key={x}>
              <p>{x} Completed: {questsEcho.echo[questsArrayEcho[i]].completed}</p>
          </div>
        )}
      </div> : null}

      {session.user.name === "Funfun" ? <div>
        {questNamesFunfun.map( (x , i)=>
          <div key={x}>
              <p>{x} Completed: {questsFunfun.funfun[questsArrayFunfun[i]].completed}</p>
          </div>
        )}
      </div> : null}

      {session.user.name === "Tomkhcoding" ? <div>
        {questNamesEmerald.map( (x, i) =>
          <div key={x}>
              <p>{x} Completed: {questsEmerald.emerald[questsArrayEmerald[i]].completed}</p>
          </div>
        )}
      </div> : null}

      {session.user.name === "Ybmad" ? <div>
        {questNamesYb.map( (x, i) =>
          <div key={x}>
              <p>{x} Completed: {questsYb.yb[questsArrayYb[i]].completed}</p>
          </div>
        )}
      </div> : null}

      {session.user.name === "Fixified" ? <div>
        {questNamesFixi.map( (x, i) =>
          <div key={x}>
              <p>{x} Completed: {questsFixi.fixi[questsArrayFixi[i]].completed}</p>
          </div>
        )}
      </div> : null}
      
      {session.user.name !== "Fixified" || "Ybmad" || "Tomkhcoding" || "Funfun" || "KodeAndre" ? <div>
          <p>You aren&#39t on the authorized list to see the quests editor. Please contact @KodeAndre or @Tomkhcoding on github for inquiries.</p>
      </div> : null}

    </>
  )
}