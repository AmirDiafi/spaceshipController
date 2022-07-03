import React from 'react'
import {View} from 'react-native'
import styles from '../../styles/controllerButtons'
import {useDispatch} from 'react-redux'
import {
  moveForward,
  moveBackbard,
  orientationLeft,
  orientationRight,
} from '../../features/position'
import ControllerButton from './ControllerButton'

export default function ControllerButtons() {
  const dispatch = useDispatch()

  const items = [
    {
      value: 'F',
      action: () => {
        dispatch(moveForward())
      },
      position: 'top',
    },
    {
      value: 'B',
      action: () => {
        dispatch(moveBackbard())
      },
      position: 'bottom',
    },
    {
      value: 'L',
      action: () => {
        dispatch(orientationLeft())
      },
      position: 'left',
    },
    {
      value: 'R',
      action: () => {
        dispatch(orientationRight())
      },
      position: 'right',
    },
  ]

  return (
    <View style={styles.buttonsContainer}>
      {items.map((item, index) => (
        <ControllerButton key={index} data={item} />
      ))}
    </View>
  )
}
