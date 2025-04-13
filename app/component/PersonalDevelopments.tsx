import PersonalDevelopment from './PersonalDevelopment'

export default function PersonalDevelopments() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-10 text-gray-700">個人開発</h2>
      <PersonalDevelopment
        title={'ポートフォリオサイト(このサイト)'}
        imagePath={'/personal_developments/portfolio.png'}
        description={
          'このサイトです'
        }
        siteUrl={'https://dj3qx3fn5ma55.cloudfront.net/'}
        githubUrl={'https://github.com/chihaso/portfolio'}
        technologies={['Next', 'CloudFront', 'GitHubActions']}
      />
      <PersonalDevelopment
        title={'書き散らし'}
        imagePath={'/personal_developments/scribblings.png'}
        description={
          'シンプルな個人用のブログアプリです。ビルド時にヘッドレスCMSのContentfulからデータを取得して、SSGで静的サイトとして配信しています。'
        }
        siteUrl={'https://d1esitozfq4mo4.cloudfront.net/'}
        githubUrl={'https://github.com/chihaso/scribblings'}
        technologies={['Next', 'CloudFront', 'GitHubActions']}
      />
      <PersonalDevelopment
        title={'審議法案ウォッチャー（公開停止済み）'}
        imagePath={'/personal_developments/bill_watcher.png'}
        description={
          '国会で審議されている法案を一覧で表示したり、コメントしたりできます。また、ウォッチ中の法案の審議状況が更新されるとメールで通知します。法案データは衆議院のウェブサイトから１日１回取得しています。'
        }
        siteUrl={'#'}
        githubUrl={'https://github.com/chihaso/bill_watcher'}
        technologies={['Rails', 'CircleCI']}
      />
    </div>
  )
}
