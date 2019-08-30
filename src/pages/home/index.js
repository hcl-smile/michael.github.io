import {lazy} from 'react'
import home from './reducers'
const Home = lazy(() => import('./home'))

export {
    Home,
    home
}