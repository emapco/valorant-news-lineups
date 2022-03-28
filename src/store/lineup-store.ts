export interface ValLineup {
  side: 'attack' | 'defend',
  map: string,
  agent: string,
  ability: string,
  description: string,
  imgDesc: LineupImgDesc[],
}

export interface LineupImgDesc {
  src: string,
  description: string,
}

export const VAL_LINEUP: ValLineup[] = [
  {
    side: 'attack',
    map: 'ascent',
    agent: 'brimstone',
    ability: 'Incendiary',
    description: 'A site generator/default plant from A main.',
    imgDesc: [
      {
        src : 'https://i2.wp.com/playerassist.com/wp-content/uploads/2022/03/image-270.png?resize=706%2C397&ssl=1', 
        description: 'Stand in this corner between the stacked Radianite boxes and the wall in A-Main'
      },
      {
        src : 'https://i2.wp.com/playerassist.com/wp-content/uploads/2022/03/image-271.png?resize=706%2C397&ssl=1', 
        description: 'Turn around and look towards the rift in the sky'
      },
      {
        src : 'https://i0.wp.com/playerassist.com/wp-content/uploads/2022/03/1-8.png?resize=706%2C397&ssl=1', 
        description: 'Place the left tip of the Incendiary icon in the V-shaped dip on the rift, then move it a bit to the left until the tip is in the middle of the left rift'
      },
      {
        src : 'https://i0.wp.com/playerassist.com/wp-content/uploads/2022/03/2-10.png?resize=706%2C397&ssl=1', 
        description: ''
      },
      {
        src : 'https://i0.wp.com/playerassist.com/wp-content/uploads/2022/03/3-8.png?resize=706%2C397&ssl=1', 
        description: ''
      },
      {
        src : 'https://i2.wp.com/playerassist.com/wp-content/uploads/2022/03/image-272.png?resize=706%2C397&ssl=1', 
        description: 'Fire Brimstone\'s Incendiary'
      },
      {
        src : 'https://i1.wp.com/playerassist.com/wp-content/uploads/2022/03/image-274.png?resize=706%2C397&ssl=1', 
        description: 'When the Incendiary is lined up properly, it should land and cover the entire A-Generator/Default area'
      },
    ]
  },
  {
    side: 'attack',
    map: 'ascent',
    agent: 'brimstone',
    ability: 'Incendiary',
    description: 'A site generator/default plant from A short cubby.',
    imgDesc: [
      {
        src : 'https://i2.wp.com/playerassist.com/wp-content/uploads/2022/03/image-276.png?resize=706%2C397&ssl=1', 
        description: 'Walk into the corner with the dog Grafitti in short cubby'
      },
      {
        src : 'https://i0.wp.com/playerassist.com/wp-content/uploads/2022/03/image-279.png?resize=706%2C397&ssl=1', 
        description: 'Look up towards the dome-shaped machine on the roof'
      },
      {
        src : 'https://i1.wp.com/playerassist.com/wp-content/uploads/2022/03/4-8.png?resize=706%2C397&ssl=1', 
        description: 'Take your knife out, then align the bottom-right slope of the Sky Smoke icon on top of the dome\'s left shoulder'
      },
      {
        src : 'https://i1.wp.com/playerassist.com/wp-content/uploads/2022/03/image-280.png?resize=706%2C397&ssl=1', 
        description: 'Launch Brimstone\'s Incendiary'
      },
      {
        src : 'https://i1.wp.com/playerassist.com/wp-content/uploads/2022/03/image-281.png?resize=706%2C397&ssl=1', 
        description: 'When the Incendiary is lined up properly, it should cover the A-Generator/Default area completely'
      },
    ]
  },
];