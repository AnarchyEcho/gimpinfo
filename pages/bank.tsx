import { Items } from 'oldschooljs';
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(context) {
    
    const guthans = Items.filter(item => item.name.includes('Guthan'))
    return {
        props: {
            
        }
    }
}

export default function Bank() {
    const Header = 
        <Head>
          <title>GIMP Bank</title>
          <meta name="description" content="Created by Echo and Tom" />
          <link rel="icon" href="/GimIconTransparent.png" />
          <meta property="og:image" content="/GimIconTransparent.png" />
        </Head>
    return (
        <div>
            {Header}
            <Link href="/">Home</Link>
            <p>lol</p>
        </div>
    )
}
