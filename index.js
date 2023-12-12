var express=require("express");
var path=require("path");
var cors=require("cors");
var session=require("cookie-session");
var usuariosRutas=require("./rutas/usuariosRutas");
var noticiaRutas=require("./rutas/noticiasRutas")
var productosRutas = require ("./rutas/productosRutas")
var rutasUsuariosApi= require("./rutas/usuariosRutasApi");
var rutasProductosApi = require("./rutas/productosRutasApi"); 

var app=express();
app.set("view engine", "ejs");
app.use(cors());
app.use(session({
    name:"session",
    keys:["CDDCDC"],
    maxAge:24*60*60*1000
}));

app.use(express.urlencoded({extended:true}));
app.use("/", express.static(path.join(__dirname,"/web")));

app.get("/", (req, res) => {
    res.render("usuarios/login");
  });

app.use("/", usuariosRutas, noticiaRutas);
app.use("/producto", productosRutas);

var port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});
