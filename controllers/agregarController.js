const agregarController = (req, res) =>{
  res.render('agregar');
}

/* Controlador para Guardar la nueva cancion */
/* const agregarCancionController = (req, res) =>{    
  const { titulo, artista, Apodo, fav } = req.body;
  if (titulo == "" || artista == "" || Apodo == "") {
  let validacion = "¡🤦 El apodo si o si y obvio el nombre de la cancion y el artista!";
  res.render('agregar', { validacion })
  }
  else {
    if (fav == "on") {
        let data = {
          tituloDB: titulo,
          artistaDB: artista,
          ApodoDB: Apodo,
          favDB: 1
        }
        let validacion = "¡Agregamos la cancion a tu lista 💛!";
        let sql = "INSERT INTO CANCIONESTABLA SET ?";
         let query = conexion.query(sql, data, (err, results) => {
          if (err) throw err;
          })
          res.render("agregar", { validacion })
      }
    else {
      let data = {
        tituloDB: titulo,
        artistaDB: artista,
        ApodoDB: Apodo,
        favDB: 0
      }
      let validacion = "¡Agregamos la cancion a tu lista 💛!";
      let sql = "INSERT INTO CANCIONESTABLA SET ?";
       let query = conexion.query(sql, data, (err, results) => {
      if (err) throw err;
      })
      res.render("agregar", { validacion })
    }
  };  
} */

module.exports = {agregarController/* ,agregarCancionController */};
