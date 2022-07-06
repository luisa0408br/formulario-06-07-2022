
let nombre,correo,mensaje

let formulario =document.getElementById('form')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
  
    nombre=document.getElementById('nombre').value
    
    correo=document.getElementById('correo').value
 
    mensaje=document.getElementById('mensaje').value
   
    Validar(nombre,correo,mensaje)
    GuardarLocalStorage(nombre,correo,mensaje)
}

function Validar(nombre,correo,mensaje) {
    if (nombre.length==0 || correo.length==0 || mensaje.length==0 ) {
        swal("Good job!", "You clicked the button!", "error");
    }
}
function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('correo',correo)
    localStorage.setItem('mensaje',mensaje)
   
}

function ListarData(params) {
    letnombreUsu = localStorage.getItem('nombre')
    letnombreUsu = localStorage.getItem('correo')
    letnombreUsu = localStorage.getItem('mensaje')
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
}