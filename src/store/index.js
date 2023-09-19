import {configureStore} from '@reduxjs/toolkit'


import homeReducer from './modules/home'

import mainReducer from './main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    main: mainReducer
  }
})

export default store