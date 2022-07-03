import {StyleSheet} from 'react-native'
import {BORDER_WIDTH, COLORS, ITEM_SIZE, WIDTH} from '../../configs/constants'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: WIDTH,
    height: WIDTH,
  },
  listContainer: {},
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderWidth: BORDER_WIDTH,
    borderColor: COLORS.blackOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blueOpacity,
  },
  itemText: {
    fontSize: 14,
    color: '#00000000',
  },
  movedItem: {
    position: 'absolute',
    bottom: 0, // because the initial position is in the bottom-left corner facing north-west
    left: 0, // the same reason as above
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderWidth: BORDER_WIDTH,
    backgroundColor: COLORS.secondBlack,
    borderColor: COLORS.blackOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movedItemText: {
    fontSize: 20,
    color: COLORS.white,
  },
})

export default styles
