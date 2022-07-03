import {createSlice} from '@reduxjs/toolkit'
import {NUM_ITEMS_PER_COLUMN} from '../../configs/constants'
const edge = NUM_ITEMS_PER_COLUMN - 1 // -1 for center

const initialState = {
  x: 0,
  y: 0,
  cardinal: 'N',
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    moveForward: state => {
      // Move Y methods
      if (state.cardinal === 'N' && state.y < edge) {
        state.y += 1
      }
      if (state.cardinal === 'S' && state.y > 0) {
        state.y -= 1
      }

      // Move X methods
      if (state.cardinal === 'E' && state.x < edge) {
        state.x += 1
      }
      if (state.cardinal === 'W' && state.x > 0) {
        state.x -= 1
      }
    },
    moveBackbard: state => {
      // Move Y methods
      if (state.cardinal === 'N' && state.y > 0) {
        state.y -= 1
      }
      if (state.cardinal === 'S' && state.y < edge) {
        state.y += 1
      }

      // Move X methods
      if (state.cardinal === 'E' && state.x > 0) {
        state.x -= 1
      }
      if (state.cardinal === 'W' && state.x < edge) {
        state.x += 1
      }
    },
    orientationRight: state => {
      switch (state.cardinal) {
        case 'N':
          state.cardinal = 'E'
          break
        case 'E':
          state.cardinal = 'S'
          break
        case 'S':
          state.cardinal = 'W'
          break
        case 'W':
          state.cardinal = 'N'
          break
        default:
          break
      }
    },
    orientationLeft: state => {
      switch (state.cardinal) {
        case 'N':
          state.cardinal = 'W'
          break
        case 'W':
          state.cardinal = 'S'
          break
        case 'S':
          state.cardinal = 'E'
          break
        case 'E':
          state.cardinal = 'N'
          break
        default:
          break
      }
    },
  },
})

export const {moveForward, moveBackbard, orientationLeft, orientationRight} =
  positionSlice.actions
export default positionSlice.reducer
