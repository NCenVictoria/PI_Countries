import {applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore} from 'redux';


import rootReducer from "./reducer";

import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;

//Redux por si solo no puede resolver operaciones asincronas, ya que redux no sabe qué respuesta puede obtener de esa operacion al ser asincrona.
//Si tengo una consulta a una API no siempre voy a tener una respuesta igual, por lo tanto redux por si solo no puede, por ello se agrega thunkMiddleware.
//con compose modifico un poco el thunk.
//Con el thunk SÍ puedo hacer las request sin problemas