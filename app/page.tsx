import Image from 'next/image'
import Work from './component/Work'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-20">
      <section className="mt-20 flex flex-col items-center">
        <Image
          src={'/profile.jpg'}
          alt="chihasoのプロフィール画像"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p className="mt-5">2020年からWebエンジニアとして働いています。</p>
        <div className="flex space-x-4 mt-5">
          <a href="https://github.com/chihaso">
            <Image src={'/icons/github.svg'} alt="GitHub icon" width={30} height={30} />
          </a>
          <a href="https://twitter.com/_chihaso_">
            <Image src={'/icons/x.svg'} alt="X icon" width={30} height={30} />
          </a>
          <a href="https://zenn.dev/chihaso">
            <Image src={'/icons/zenn.svg'} alt="Zenn icon" width={30} height={30} />
          </a>
          <a href="https://speakerdeck.com/chihaso">
            <Image src={'/icons/speakerdeck.svg'} alt="SpeakerDeck icon" width={30} height={30} />
          </a>
        </div>
      </section>
      <section className="mt-20">
        <Work
          title={'書き散らし'}
          imagePath={'/works/scribblings.png'}
          description={
            'シンプルな個人用のブログアプリです。ビルド時にヘッドレスCMSのContentfulからデータを取得して、SSGで静的サイトとして配信しています。'
          }
          siteUrl={'https://d1esitozfq4mo4.cloudfront.net/'}
          githubUrl={'https://github.com/chihaso/scribblings'}
          technologies={['Next', 'CloudFront', 'GitHubActions']}
        />
      </section>
    </main>
  )
}
