import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
        <main>
          <header>
            <Link href="/dashboard">マイページへ</Link>
          </header>
          <article>{children}</article>
        </main>
        
        
      )
    }