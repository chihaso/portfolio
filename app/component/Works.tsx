import Work from './Work'

export default function Works() {
  return (
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
  )
}
