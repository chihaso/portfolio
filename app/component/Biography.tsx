import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-10 text-gray-700">略歴</h2>
      <ul>
        <li>2020/03~2022/06: フィヨルドブートキャンプ卒業後、受託開発企業にて、正社員として6件程度の開発案件に従事（Rails, React, Vue.js）</li>
        <li>2022/07~2023/11: 材料開発者向け実験支援アプリを開発する企業にて、正社員としてDevOpsに従事（Rails, React, AWS）</li>
        <li>2024/01~: 小売・飲食店等向けのシフト制作アプリを開発する企業にて、業務委託として開発に従事（Rails, Vue.js）</li>
      </ul>
    </div>
  )
}
