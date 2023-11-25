const technologyList = [
  'Rails',
  'Next',
  'React',
  'TypeScript',
  'CloudFront',
  'GitHubActions',
] as const

export type TechnologyType = (typeof technologyList)[number]
