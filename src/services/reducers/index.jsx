import { combineReducers } from 'redux'
import { drag } from './draggle'
import { dropTargetReducer } from './target'
import { feedReducer, orderReducer } from './api'
import { currentCard } from './currentCard'
import { getConstructor } from './constructor'
import { checkPopup } from './popups'
import { setPopup } from './popups'

export const rootReducer = combineReducers({
  feedReducer,
  orderReducer,
  currentCard,
  getConstructor,
  drag,
  dropTargetReducer,
  checkPopup,
  setPopup
})
