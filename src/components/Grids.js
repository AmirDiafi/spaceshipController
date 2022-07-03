import React, {useEffect, useRef} from 'react'
import {Animated, FlatList, Text, View} from 'react-native'
import {
  NUM_ITEMS_PER_COLUMN,
  ITEM_SIZE,
  TOTAL_ITEMS,
} from '../../configs/constants'
import styles from '../styles/grids'
import {useSelector} from 'react-redux'

const arrayOf100Items = Array.from({length: TOTAL_ITEMS}, (_, i) => i + 1)

export default function Grids() {
  const {x, y} = useSelector(state => state.position)
  const translateX = useRef(new Animated.Value(x)).current
  const translateY = useRef(new Animated.Value(y)).current

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: x * ITEM_SIZE,
      useNativeDriver: true,
    }).start()
  }, [x])

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: -y * ITEM_SIZE,
      useNativeDriver: true,
    }).start()
  }, [y])

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayOf100Items}
        numColumns={NUM_ITEMS_PER_COLUMN}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <Animated.View
        style={{
          ...styles.movedItem,
          transform: [{translateX: translateX}, {translateY: translateY}],
        }}>
        <Text style={styles.movedItemText}>X</Text>
      </Animated.View>
    </View>
  )
}
