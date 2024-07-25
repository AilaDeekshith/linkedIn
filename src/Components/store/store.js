import {configureStore} from '@reduxjs/toolkit'
import Auth from './Auth'
import users from './usersSlice'

const store = configureStore({
    reducer:{
        Auth,
        users
    }
})

export default store;