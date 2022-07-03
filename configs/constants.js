import {Dimensions} from 'react-native'

let {width: WIDTH} = Dimensions.get('window')
const BORDER_WIDTH = 1
const NUM_ITEMS_PER_COLUMN = 10
const TOTAL_ITEMS = NUM_ITEMS_PER_COLUMN * NUM_ITEMS_PER_COLUMN
const ITEM_SIZE = WIDTH / NUM_ITEMS_PER_COLUMN

// COLORS USED
const COLORS = {
  black: '#000',
  secondBlack: '#00000090',
  blackOpacity: '#00000050',
  blackMostOpacity: '#00000020',
  white: '#eee',
  blue: '#1da1f2',
  blueOpacity: '#1da1f230',
}

export {
  ITEM_SIZE,
  BORDER_WIDTH,
  WIDTH,
  NUM_ITEMS_PER_COLUMN,
  TOTAL_ITEMS,
  COLORS,
}
