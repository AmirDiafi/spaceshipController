import React from 'react'
import {View} from 'react-native'
import styles from '../styles/controller'
import Position from './controller/Position'
import ControllerButtons from './controller/ControllerButtons'

export default function Controller() {
  return (
    <View style={styles.container}>
      <Position />
      <ControllerButtons />
    </View>
  )
}
