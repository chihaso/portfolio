import Profile from './component/Profile'
import Works from './component/Works'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-20">
      <section className="mt-20">
        <Profile />
      </section>
      <section className="mt-20">
        <Works />
      </section>
    </main>
  )
}
