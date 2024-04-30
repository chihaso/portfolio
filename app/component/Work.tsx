import Image from 'next/image'
import Technology from './Technology'
import { TechnologyType } from '../lib/technologies'

type Props = {
  title: string
  imagePath: string
  description: string
  siteUrl: string
  githubUrl: string
  technologies: TechnologyType[]
}

export default function Work({
  title,
  imagePath,
  description,
  siteUrl,
  githubUrl,
  technologies,
}: Props) {
  return (
    <div className="border-2 border-gray-400 rounded-xl w-4/5 max-w-4xl mb-20 mx-auto overflow-hidden text-gray-700">
      <div className="relative h-56">
        <Image src={imagePath} alt={`${title}のイメージ画像`} fill className="object-cover" />
      </div>
      <div className="m-2">
        <h2 className="text-xl">{title}</h2>
        <p className="mt-1">{description}</p>
        <div className="mt-1 flex justify-start flex-wrap">
          {technologies.map((technology, index) => (
            <Technology key={index} technology={technology} />
          ))}
        </div>
        <div className="mt-1 text-lg">
          <a href={siteUrl} className="underline">
            Web Site
          </a>
          &nbsp;/&nbsp;
          <a href={githubUrl} className="underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
