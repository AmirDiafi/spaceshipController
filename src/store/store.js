import {configureStore} from '@reduxjs/toolkit'
import positionReducer from '../features/position'

export default configureStore({
  reducer: {
    position: positionReducer,
  },
})
