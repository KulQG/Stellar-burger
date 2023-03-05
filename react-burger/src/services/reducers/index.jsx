import { combineReducers } from 'redux'
import { drag } from './draggle'
import { dropTargetReducer } from './target'
import {feedReducer} from './ingrApi' 
import { orderReducer } from './orderApi'
import { currentCard } from './currentCard'
import { getConstructor } from './constructor'
import { checkPopup } from './popups'
import { setPopup } from './popups'
import { postForgotReducer } from './postEmail'
import { registerReducer } from './registerApi'
import { authReducer } from './authApi'
import { resetPasswordReducer } from './resetPassword'
import { getUserReducer } from './getUserApi'
import { updateTokenReducer } from './updateToken'
import { ingrPageHandler } from './ingrPageHandler'
import { wsReducer } from './wsReducer'

export const rootReducer = combineReducers({
  feedReducer,
  orderReducer,
  currentCard,
  getConstructor,
  drag,
  dropTargetReducer,
  checkPopup,
  setPopup,
  postForgotReducer,
  registerReducer,
  authReducer,
  resetPasswordReducer,
  getUserReducer,
  updateTokenReducer,
  ingrPageHandler,
  wsReducer
})
