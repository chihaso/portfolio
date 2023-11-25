import { TechnologyType } from '../lib/technologies'

type Props = {
  technology: TechnologyType
}

export default function Technology({ technology }: Props) {
  return <div className="px-1 mr-2 mt-1 border-2 rounded border-gray-400">{technology}</div>
}
