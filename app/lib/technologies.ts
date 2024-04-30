const technologyList = [
  'Rails',
  'Next',
  'React',
  'TypeScript',
  'CloudFront',
  'GitHubActions',
  'CircleCI',
] as const

export type TechnologyType = (typeof technologyList)[number]
