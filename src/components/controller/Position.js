import React from 'react'
import {Text, View} from 'react-native'
import styles from '../../styles/position'
import {useSelector} from 'react-redux'

export default function Position() {
  const {x, y, cardinal} = useSelector(state => state.position)
  return (
    <View style={styles.positionValusContainer}>
      <Text style={styles.positionTitle}>Current Position</Text>
      <View style={styles.positionValuesContainer}>
        <Text style={styles.positionText}>{x}, </Text>
        <Text style={styles.positionText}>{y}, </Text>
        <Text style={styles.positionText}>{cardinal}</Text>
      </View>
    </View>
  )
}
