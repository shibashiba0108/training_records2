import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Link href="/TrainingRecords">WORKOUT!</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}