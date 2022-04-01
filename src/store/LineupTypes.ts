export interface ValLineup {
  side: 'attack' | 'defend',
  ability: string,
  description: string,
  imgDesc: LineupImgDesc[],
}

export interface LineupImgDesc {
  src: string,
  description: string,
}
