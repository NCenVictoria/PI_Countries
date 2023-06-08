import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName} from '../../redux/actions';
import './search.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState();

    function handleInputChange(event) {
        event.preventDefault();
        
        setName(event.target.value);
        
        //dispatch(getNameCountries(name));
        console.log(name); // Mostramos por consola el estado local.
    }

    function handleSubmit(event) {
        if(name){
            event.preventDefault();
        dispatch(getCountryByName(name))
        
        setName('');
        
        
        }else
        return alert('enter name')
    }
    

    return (
        <div className='container'>
            <input
                class='inputs'
                type='text'
                value={name}
                placeholder='Buscar...'
                onChange={handleInputChange}
            />
            <button
                class='button'
                type='submit'
                onClick={handleSubmit}>
                Search
            </button>
        </div>
    )
}