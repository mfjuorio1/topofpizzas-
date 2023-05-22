// const email = document.getElementById("mail");

// esto es de mdn (mozilla)
// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("por favor colocar una dirección de email válida!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

//esto es de bootstrap
// const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

//esto es de desarrolloweb.com

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("survey-form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    if(nombre.length == 0) {
      alert('No has escrito tu nombre');
      return;
    }
    //let clave = document.getElementById('clave').value;
    //if (clave.length < 6) {
      //alert('La clave no es válida');
     //return;
    }
    this.submit();{
  }