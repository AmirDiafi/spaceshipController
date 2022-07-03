import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/controllerButton'

const itemPositionValue = 0

export default function ControllerButton({data}) {
  return (
    <TouchableOpacity
      onPress={() => {
        data.action()
      }}
      style={{...styles.button, [data.position]: itemPositionValue}}>
      <Text style={styles.buttonText}>{data.value}</Text>
    </TouchableOpacity>
  )
}
