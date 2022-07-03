import React from 'react'
import {SafeAreaView} from 'react-native'
import Grids from '../components/Grids'
import Controller from '../components/Controller'

const Home = () => {
  return (
    <SafeAreaView>
      <Grids />
      <Controller />
    </SafeAreaView>
  )
}

export default Home
