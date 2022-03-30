export interface ValAgent {
  name: string,
  src: string,
  description: string,
  maps: string[],
}

const brimstone: ValAgent = {
  name: 'Brimstone',
  src: '/assets/images/agents/brimstone.png',
  description: '',
  maps: ['Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Split'],
}

const cypher: ValAgent = {
  name: 'Cypher',
  src: '/assets/images/agents/cypher.png',
  description: '',
  maps: ['Ascent', 'Bind', 'Haven', 'Icebox', 'Split'],
}
const kayo: ValAgent = {
  name: 'Kayo',
  src: '/assets/images/agents/kayo.png',
  description: '',
  maps: ['Ascent', 'Fracture', 'Haven', 'Icebox', 'Split'],
}
const killjoy: ValAgent = {
  name: 'Killjoy',
  src: '/assets/images/agents/killjoy.png',
  description: '',
  maps: ['Bind', 'Breeze', 'Fracture', 'Split'],
}
const sova: ValAgent = {
  name: 'Sova',
  src: '/assets/images/agents/sova.png',
  description: '',
  maps: ['Ascent', 'Bind', 'Haven', 'Icebox', 'Split'],
}
const viper: ValAgent = {
  name: 'Viper',
  src: '/assets/images/agents/viper.png',
  description: '',
  maps: ['Ascent', 'Split'],
}

export const VAL_AGENTS = {
  brimstone, cypher, kayo, 
  killjoy, sova, viper
}

/*
const astra: ValAgent = {
  name: 'Astra',
  src: '/assets/images/agents/astra.png',
  description: ''
}
const breach: ValAgent = {
  name: 'Breach',
  src: '/assets/images/agents/breach.png',
  description: ''
}
const chamber: ValAgent = {
  name: 'Chamber',
  src: '/assets/images/agents/chamber.png',
  description: ''
}
const jett: ValAgent = {
  name: 'Jett',
  src: '/assets/images/agents/jett.png',
  description: ''
}
const neon: ValAgent = {
  name: 'Neon',
  src: '/assets/images/agents/neon.png',
  description: ''
}
const omen: ValAgent = {
  name: 'Omen',
  src: '/assets/images/agents/omen.png',
  description: ''
}
const phoenix: ValAgent = {
  name: 'Phoenix',
  src: '/assets/images/agents/phoenix.png',
  description: ''
}
const raze: ValAgent = {
  name: 'Raze',
  src: '/assets/images/agents/raze.png',
  description: ''
}
const reyna: ValAgent = {
  name: 'Reyna',
  src: '/assets/images/agents/reyna.png',
  description: ''
}
const sage: ValAgent = {
  name: 'Sage',
  src: '/assets/images/agents/sage.png',
  description: '',
  maps: ['Haven', 'Icebox', 'Split'],
}
const skye: ValAgent = {
  name: 'Skye',
  src: '/assets/images/agents/skye.png',
  description: ''
}
const yoru: ValAgent = {
  name: 'Yoru',
  src: '/assets/images/agents/yoru.png',
  description: ''
}
*/