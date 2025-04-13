import Profile from './component/Profile'
import Biography from './component/Biography'
import PersonalDevelopments from './component/PersonalDevelopments'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-20">
      <section className="mt-20">
        <Profile />
      </section>
      <section className="mt-20">
        <Biography />
      </section>
      <section className="mt-20">
        <PersonalDevelopments />
      </section>
    </main>
  )
}
