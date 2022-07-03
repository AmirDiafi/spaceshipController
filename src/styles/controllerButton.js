import {StyleSheet} from 'react-native'
import {COLORS} from '../../configs/constants'

const buttonSize = 50

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: COLORS.blue,
    width: buttonSize,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.blackMostOpacity,
    borderRadius: buttonSize,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
    shadowColor: COLORS.secondBlack,
    shadowOpacity: 1,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.secondBlack,
    fontWeight: 'bold',
  },
})

export default styles
