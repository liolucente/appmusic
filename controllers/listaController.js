
const mysql = require('mysql2');

conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE
})

/* Controlador para Guardar el Apodo el Home */
const milistaController = (req, res) =>{
    res.render('mimusica')
}

/* Controlador para Guardar el Apodo el Home */
/* const buscarLista = (req, res) =>{    
    const { ApodoEX } = req.body;
    if (ApodoEX == "") {
        let validacion = "¡Esta vacio el campo eh 🤦 !";
        res.render('mimusica', { validacion })
    }
    else {
        let sql = "select * from CANCIONESTABLA where ApodoDB = '" + ApodoEX + "'"; //se deberian seleccionar solo las canciones del APODO    
        let query = conexion.query(sql, (err, results) => {
            if (err) throw err;
            res.render('mimusica', { tabla1: 'CANCIONESTABLA', ApodoEX, results})
        })
    };
}  */

module.exports = {milistaController/* ,buscarLista */};
