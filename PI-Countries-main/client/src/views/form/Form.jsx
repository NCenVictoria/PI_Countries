import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import validate from './validate'
import './Form.css'


export default function Form() {
 
  const allCountries = useSelector(state => state.countries)
  const [nameCountry,setNameCountry] = useState([])
  const [form, setForm] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    CountryId:[]
  })
   const [error,setError]= useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    CountryId:[]

   })
  //  const [views,setViews]= useState({CountryId:[]})
  
  const array=allCountries;
 const countriesHandler = (event) => {
   
    console.log(array)
    setNameCountry([...nameCountry,array.find(e=>e.id===event.target.value)])
    setForm({
      ...form,
      CountryId: [...form.CountryId, event.target.value],
    });
  }
 
   

  const onChangeHandler =(event)=>{
    
  //  console.log(event.target.name)
  setError(
    validate({
      ...form, [event.target.name]: event.target.value
    })
  )
  
   setForm({
    ...form, [event.target.name]: event.target.value
   })
  }
  const onSubmithandler=(event)=>{
    event.preventDefault();
    console.log(form)
    if(Object.keys(error).length){
      return alert('missing info')}
    axios.post("http://localhost:3001/activities",form)
    .then(res=>alert(res.data))
    .catch(error=>alert(error.data))
    setForm({name:"",
    difficulty:"",
    duration:"",
    season:"",
    CountryId:[]})
    
  }

  return (
  <form  onSubmit={onSubmithandler}>
    <div className='container'>
    <div class='cont_inputs'>
    <div>
      
      <input class='inputs' placeholder='Enter New Avtivity...'type="text" value={form.name} onChange={onChangeHandler} name='name'/>
      {error.name ? (<p class='errors'>{error.name}</p>) : ""}
    </div>
    <div>
      
      <select class='inputs' onChange={onChangeHandler} name='difficulty'>
                            {["DIFFICULTY", 1, 2, 3, 4, 5].map(el => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                        {error.difficulty && (<p class='errors'>{error.difficulty}</p>)}
    </div>
    <div>
      
      <select class='inputs' onChange={onChangeHandler} name='duration'>
                            {["DURATION", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => (
                                <option key={el} value={el}>{el} hrs</option>
                            ))}
                        </select>
                        {error.duration && (<p class='errors'>{error.duration}</p>)}
    </div>
    <div>
      
      <select class='inputs' onChange={onChangeHandler} name='season'>
                            {["SEASON", "Verano", "Otoño", "Invierno", "Primavera"].map(el => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                        {error.season && (<p class='errors'>{error.season}</p>)}
    </div>
    
      
      <input class='button' type="reset" value="Restaurar"/>
      </div>
      <div>
      <div class='cont_countries'>
    
                        <label></label>
                        
                        <div>
                            <select class='inputs' name="countryId" onChange={countriesHandler}>
                                <option name="Select">COUNTRY/COUNTRIES</option>
                                {allCountries.map(country => 
                                    <option key={country.name} name={country.name} value={country.id}>
                                        {country.name}
                                    </option>
                                )
                                }
                            </select>
                          
                        </div>
                        {error.CountryId && (<p class='errors'>{error.CountryId}</p>)}
                        <h5 class='add_countries'>selected: {nameCountry.map(e=><li>{e.name} </li>)}</h5>
                    </div>
                    
                    <button class='button' type='submit'>Create</button>
      </div>
     
      </div>
    </form>
  )
}

// -  Nombre.
// -  Dificultad.
// -  Duración.
// -  Temporada.
// -  Posibilidad de seleccionar/agregar varios países en simultáneo.
// -  Botón para crear la actividad turística.
