import {StyleSheet} from 'react-native'
import {COLORS} from '../../configs/constants'

const styles = StyleSheet.create({
  positionValusContainer: {
    marginBottom: 15,
  },
  positionTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  positionValuesContainer: {
    backgroundColor: COLORS.blueOpacity,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
    shadowColor: COLORS.secondBlack,
    shadowOpacity: 1,
  },
  positionText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.secondBlack,
  },
})

export default styles
