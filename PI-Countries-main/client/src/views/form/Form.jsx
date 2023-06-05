import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import validate from './validate'


export default function Form() {
 
  const allCountries = useSelector(state => state.countries)
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
  
 const countriesHandler = (event) => {
    
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
    .then(res=>alert(res))
    .catch(error=>alert(error))
    setForm({name:"",
    difficulty:"",
    duration:"",
    season:"",
    CountryId:[]})
    
  }

  return (
  <form onSubmit={onSubmithandler}>
    <div>
      <label >NAME</label>
      <input type="text" value={form.name} onChange={onChangeHandler} name='name'/>
      {error.name ? (<p>{error.name}</p>) : ""}
    </div>
    <div>
      <label htmlFor="">DIFFICULTY</label>
      <select onChange={onChangeHandler} name='difficulty'>
                            {["Seleccionar", 1, 2, 3, 4, 5].map(el => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                        {error.difficulty && (<p>{error.difficulty}</p>)}
    </div>
    <div>
      <label htmlFor="">DURATION</label>
      <select onChange={onChangeHandler} name='duration'>
                            {["Select", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => (
                                <option key={el} value={el}>{el} hrs</option>
                            ))}
                        </select>
                        {error.duration && (<p>{error.duration}</p>)}
    </div>
    <div>
      <label htmlFor="">SEASON</label>
      <select onChange={onChangeHandler} name='season'>
                            {["Select", "Verano", "Otoño", "Invierno", "Primavera"].map(el => (
                                <option key={el} value={el}>{el}</option>
                            ))}
                        </select>
                        {error.season && (<p>{error.season}</p>)}
    </div>
    <div>
    <div>
                        <label>COUNTRY/COUNTRIES</label>
                        
                        <div><h5>{form.CountryId.map(e=><h7>{e}, </h7>)}</h5>
                            <select name="countryId" onChange={countriesHandler}>
                                <option name="Select">Select</option>
                                <option name="Select all" value={allCountries.CountryId}>Select all</option>


                                {allCountries.map(country => 
                                    <option key={country.id} name={country.name} value={country.id}>
                                        {country.name}
                                    </option>
                                )
                                }
                            </select>
                          
                        </div>
                        {error.CountryId && (<p>{error.CountryId}</p>)}
                    </div>
      
    </div>
      <button type='submit'>Create</button>
    
    </form>
  )
}

// -  Nombre.
// -  Dificultad.
// -  Duración.
// -  Temporada.
// -  Posibilidad de seleccionar/agregar varios países en simultáneo.
// -  Botón para crear la actividad turística.
