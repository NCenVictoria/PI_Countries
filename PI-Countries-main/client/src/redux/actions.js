import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_COUNTRY_BY_ACTIVITY = "GET_COUNTRY_BY_ACTIVITY";
export const ORDERS = "ORDERS";
export const FILTERS = "FILTERS";
export const NEXT_PAGE = "NEXT_PAGE";
export const CLEAN = "CLEAN";
export const FILTERS_FALSE = "FILTERS_FALSE"





export const getCountries = () => {
  return async function (dispatch) {
    const bd = await axios.get("/countries");
    const countries = bd.data;
    dispatch({ type: GET_COUNTRIES, payload: countries }); //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
  };
};

//las actions creators no pueden devolver una peticion, por eso devuelvo otra funcion que sí podrá hacer la request.
export const getCountryByName = (name) => {
    return async function (dispatch) {
      const bd = await axios.get(`/countries?name=${name}`);
      const country = bd.data
      dispatch({ type: GET_COUNTRY_BY_NAME, payload: country }); //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
    };
  };
  
  export const postActivity = (form) => {
    return async function (dispatch) {
      const bd = await axios.post("/activities",form);
      const activity = bd.data
      dispatch({ type: POST_ACTIVITY, payload: activity });
    };
  };
  
  export const getCountryById = (id) => {
    return async function (dispatch) {
      const bd = await axios.get(`/countries/${id}`);
      const country = bd.data
      console.log("paso por action")
      dispatch({ type: GET_BY_ID, payload: country });
    };
  };
  
  export const getActivities = () => {
    return async function (dispatch) {
      const bd = await axios.get("/activities");
      const activities = bd.data
      dispatch({ type: GET_ACTIVITY, payload: activities });
    };
  };
  export const getCountryByActivity=(activity)=>{
    console.log(activity, 'estoy en action')
    return function(dispatch){
      return dispatch({type: GET_COUNTRY_BY_ACTIVITY , payload:activity})
    }
  }

  export const order = (order) =>{
    return function(dispatch){
      return dispatch({type: ORDERS , payload:order})
      
    }
  }
  export const filter = (filter) =>{
    console.log(filter)
    return function  (dispatch){
      return dispatch({type: FILTERS,payload:filter})
    }
  }
    export const filtersFalse= ()=>{
      return{
        type: FILTERS_FALSE
      }
    }
      
    
  
  export const nextPage = (page) =>{
    console.log(page)
    return function  (dispatch){
      return dispatch({type: NEXT_PAGE,payload:page})
    }
    
  }
 
  export function clean(){
    console.log("se limpia")
    return{
     type: CLEAN
    }
  
  };