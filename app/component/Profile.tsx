import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
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
    </div>
  )
}
