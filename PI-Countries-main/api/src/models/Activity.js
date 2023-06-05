const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    // id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     primaryKey: true ,
        
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    }

  }, {freezeTableName: true,
      timestamps: false});//sirve para congelar el nombre de la tabla
};
// -  ID. \*
// -  Nombre. \*
// -  Dificultad (número del 1 al 5). \*
// -  Duración (en horas).
// -  Temporada (Verano, Otoño, Invierno o Primavera). \*