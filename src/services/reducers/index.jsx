import { combineReducers } from 'redux'
import { drag } from './draggle'
import { dropTargetReducer } from './target'
import { feedReducer, orderReducer } from './api'
import { currentCard } from './currentCard'
import { getConstructor } from './constructor'

export const rootReducer = combineReducers({
  feedReducer,
  orderReducer,
  currentCard,
  getConstructor,
  drag,
  dropTargetReducer,
})
