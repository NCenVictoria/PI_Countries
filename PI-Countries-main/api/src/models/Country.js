const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,

    },
    continent:{
      type: DataTypes.STRING,

    },
    capital:{
      type: DataTypes.STRING,

    },
    subregion:{
      type: DataTypes.STRING,

    },
    area:{
      type: DataTypes.STRING,

    },
    population:{
      type: DataTypes.INTEGER,
    }

  },{freezeTableName: true, timestamps: false} );
};

// ID (Código de tres letras). \*
// -  Nombre. \*
// -  Imagen de la bandera. \*
// -  Continente. \*
// -  Capital. \*
// -  Subregión.
// -  Área.
// -  Población. \*
