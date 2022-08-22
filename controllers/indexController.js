/* Controlador para imprimir el Home */
const indexController = (req, res) =>{
    res.render('index');
}

/* Controlador para Guardar el Apodo el Home */
/* const indexApodoController = (req, res) =>{
    const { Apodo } = req.body;
    if (Apodo == "") {
        let validacion = "¡Esta vacio el campo eh 🤦 !";
        res.render('index', { validacion })
    }
    else {
        let data = {
            ApodoDB: Apodo
        }
        let validacion = "Hemos guardado tu apodo no lo olvides";
        res.render('index', { validacion })
        let sql = "INSERT INTO APODOSTABLA SET ?";
          let query = conexion.query(sql, data, (err, results) => {
            if (err) throw err;
        })
    };    
} */

module.exports = {indexController/* ,indexApodoController */};