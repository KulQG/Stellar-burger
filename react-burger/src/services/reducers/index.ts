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
import { ingrPageHandler, orderPageHandler } from './ingrPageHandler'
import { wsReducer, userWsReducer, checkOpenWs } from './wsReducer'

export const rootReducer = combineReducers({
  /*feedReducer:*/ feedReducer,
  /*orderReducer:*/ orderReducer,
  /*curCard:*/ currentCard,
  /*getConstructor:*/ getConstructor,
  /*drag:*/ drag,
  /*dropTargetReducer:*/ dropTargetReducer,
  /*checkPopup:*/ checkPopup,
  /*setPopup:*/ setPopup,
  /*postForgotReducer:*/ postForgotReducer,
  /*registerReducer:*/ registerReducer,
  /*authReducer:*/ authReducer,
  /*resetPasswordReducer:*/ resetPasswordReducer,
  /*getUserReducer:*/ getUserReducer,
  /*updateTokenReducer:*/ updateTokenReducer,
  /*ingrPageHandler:*/ ingrPageHandler,
  /*orderPageHandler:*/ orderPageHandler,
  /*wsReducer:*/ wsReducer,
  /*userWsReducer:*/ userWsReducer,
  /*checkOpenWs:*/ checkOpenWs,
});
