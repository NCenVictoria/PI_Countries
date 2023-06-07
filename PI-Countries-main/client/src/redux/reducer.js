import{
    GET_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_BY_ID,
    GET_ACTIVITY,
    POST_ACTIVITY,
    GET_COUNTRY_BY_ACTIVITY,
    ORDERS,
    FILTERS,
    NEXT_PAGE,
    CLEAN
  } from './actions'

const initialState = {
    page:1,
    countries: [],
    datail:[],
    activity:[],
    countriesTidy:[],
    countriesFil:[],
    filters:false,
}

const rootReducer= (state=initialState,action)=>{
 switch(action.type){
    case GET_COUNTRIES:
        return {...state,countries:action.payload}
      case GET_COUNTRY_BY_NAME:
          return { ...state, countries: action.payload };
    
      case GET_BY_ID:
          return { ...state, detail: action.payload };
      case GET_ACTIVITY:
          return { ...state, activity: action.payload };
      case POST_ACTIVITY:
          return { ...state, activity:action.payload};
      case GET_COUNTRY_BY_ACTIVITY:
        console.log(action.payload)
       
          return{
            ...state, filters:true,countriesFil:[...state.countries].filter(el=> el.Activities.map((e) => e.name).includes(action.payload))
          }
      case ORDERS:
        if(action.payload==='alph_asc'){
          return {
            ...state, filters:false,countries: [...state.countries].sort((prev,next)=>{
                if (prev.name>next.name) return 1
                if (prev.name<next.name) return -1
                return 0
            })
          }
        }else if(action.payload==='alph_dec'){
            return {
                ...state, filters:false, countries: [...state.countries].sort((prev,next)=>{
                    if (prev.name>next.name) return -1
                    if (prev.name<next.name) return 1
                    return 0
                })
              }
        }else if(action.payload==='population_asc'){
            return {
                ...state, filters:false,countries: [...state.countries].sort((prev,next)=>{
                    if (prev.population>next.population) return -1
                    if (prev.population<next.population) return 1
                    return 0
                })
              }
        }else if(action.payload==='population_dec'){
            return {
                ...state, filters:false,countries: [...state.countries].sort((prev,next)=>{
                    if (prev.population>next.population) return 1
                    if (prev.population<next.population) return -1
                    return 0
                })
              }
        }
        return {...state}
      case FILTERS:
        if(action.payload==='asia'){
            
            return{
            ...state,filters:true, countriesFil: [...state.countries].filter(e=>e.continent==='Asia') 
        }
    }
        if(action.payload==='america'){
            return{
            ...state,filters:true, countriesFil:[...state.countries].filter(e=>e.continent==='Americas') 
        }
    }
        if(action.payload==='africa'){
            return{
            ...state,filters:true, countriesFil:[...state.countries].filter(e=>e.continent==='Africa') 
        }
    }
        if(action.payload==='antartica'){
            return{
            ...state, 
            filters:true,countriesFil:[...state.countries].filter(e=>e.continent==='Antarctic') 
        }
    }
        if(action.payload==='europa'){
            return{
            ...state,
            filters:true, countriesFil:[...state.countries].filter(e=>e.continent==='Europe') 
        }
    }
    if(action.payload==='oceania'){
        return{
        ...state,
        filters:true, countriesFil:[...state.countries].filter(e=>e.continent==='Oceania') 
        }
    }
    return{...state,filters:false} 
    
    
        
      case CLEAN:
          return{
              ...state,
              detail:[]
            }
      case NEXT_PAGE:
        
        return{
            ...state,page: action.payload
        }
    default: return {...state}
 }

}
export default rootReducer;