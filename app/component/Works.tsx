import Work from './Work'

export default function Works() {
  return (
    <>
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
      <Work
        title={'審議法案ウォッチャー'}
        imagePath={'/works/bill_watcher.png'}
        description={
          '国会で審議されている法案を一覧で表示したり、コメントしたりできます。また、ウォッチ中の法案の審議状況が更新されるとメールで通知します。法案データは衆議院のウェブサイトから１日１回取得しています。'
        }
        siteUrl={'https://bill-watcher.com/'}
        githubUrl={'https://github.com/chihaso/bill_watcher'}
        technologies={['Rails', 'CircleCI']}
      />
    </>
  )
}
