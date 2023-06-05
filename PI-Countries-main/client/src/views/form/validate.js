const validate=({name,difficulty,duration,season,CountryId})=> {
    let error = {};
    
    if (/\d/.test(name)) {
        error.name = "No se permiten números en el nombre de Actividad";
    }
    if (!/^[A-Z]+$/i.test(name)) {
        error.name = "La Actividad turística debe contener sólo letras";
    }
    if (!difficulty) {
        error.difficulty = "Seleccionar una Dificultad";
    }
    if (!duration) {
        error.duration = "Indicar duración (en horas) de la Actividad";
    }
    if (!season) {
        error.season = "Seleccionar una Temporada del año"
    }
    if (!CountryId) {
        error.CountryId = "Seleccionar uno o más países"
    }
    return error;
  }
  export default validate