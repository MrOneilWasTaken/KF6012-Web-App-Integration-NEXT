import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/navbar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>  
        <ul>
          <h1 className='header'>MrOneil</h1>   
          <li>
            <Link href="/authors" passHref>
              <button className="navButton" >Authors</button>
            </Link>
          </li>   
          <li>
            <Link href="/papers" passHref>
              <button className="navButton" >Papers</button>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <button className="navButton" >Home</button>
            </Link>
          </li>
          
        </ul>
      </nav>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </div>
    )
}

export default MyApp
