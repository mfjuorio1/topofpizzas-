// const email = document.getElementById("mail");

// esto es de mdn (mozilla)-----------------------------------------------------
// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("por favor colocar una dirección de email válida!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

//esto es de bootstrap-----------------------------------------------------------
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

//esto es de desarrolloweb.com---------------------------------------------------

//document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("survey-form").addEventListener('submit', validarFormulario); 
//   });
  
//   function validarFormulario(evento) {
//     evento.preventDefault();
//     if(nombre.length == 0) {
//       alert('No has escrito tu nombre');
//       return;
//     }
//     //let clave = document.getElementById('clave').value;
//     //if (clave.length < 6) {
//       //alert('La clave no es válida');
//      //return;
//     }
//     this.submit();
//   }

//esto es de Jon Mircha (JS video 102)-----------------------------------------------

const d = document;

export default function bookingFormValidations() {
    const $form = d.querySelector(".booking-form"),
    $inputs = d.querySelectorAll(".booking-form[required]");

    console.log($inputs);
    $inputs.forEach(input =>{
        const $span=d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("booking-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });
    // se puede hacer con el submit en vez de keyup
    //d.addEventListener("keyup",(e)=>{ 
       // if(e.target.matches("booking-form[required]")){
       //     let $input = e.target,
       //     pattern = $input.pattern || $input.dataset.pattern;
       //     }});
    
    

    //console.log($input, pattern);

    //le faltan dos if segun Jon Mircha:

    // si el imput tiene patron

    //if (pattern!==""){
    //     let regex = newRegExp(pattern);
    //     return !regex.exec($input.value)
    //     ?d.getElementById($input.name).classList.add("is-active")
    //     :d.getElementById($input.name).classList.remove("is-active")
    // }

    // si el imput NO tiene patron

    //if(!pattern) {
    //return $input.value ===""
    //?d.getElementById($input.name).classList.add("is-active")
    //:d.getElementById($input.name).classList.remove("is-active")
    // }
    //}

    

d.addEventListener("submit",e=>{
        e.preventDefault();
        alert("Enviando Formulario");
    
const $loader=d.querySelector("booking-form-loader"),
    $response=d.querySelector("booking-form-response");

    $loader.classList.remove("none");

    setTimeout(()=>{
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();

        setTimeout(()=>$response.classList.add("none"),3000);
    },3000);
});
}





