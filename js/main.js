const contactForm = document.getElementById('contact_form');

const userName = document.querySelector('#user_name');
const userEmail = document.querySelector('#user_email');
const userContacto = document.querySelector('#user_contacto');
const message = document.querySelector('#message');
const userUbicacion = document.querySelector('#user_ubicacion');


contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const body = {
        service_id: 'service_i4bom06',
        template_id: 'template_ygufjfx',
        user_id: 'bsw9S29EuQOAICAvm',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message': message.value,
            'from_contacto': userContacto.value,
            'from_ubicacion':userUbicacion.value,
        }
    };

    try {
        const response = await sendEmail(body);
        console.log(response);
        if (response && response.includes('OK')) {
            // Mostrar SweetAlert de éxito
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'MENSAJE ENVIADO CON EXITO',
                showConfirmButton: false,
                timer: 1500
              })
        
            // Limpiar los campos del formulario
            userName.value = '';
            userEmail.value = '';
            message.value = '';
            userContacto.value = '';
            userUbicacion.value = '';
            

        }
        else {
            // Mostrar SweetAlert de error si la respuesta no contiene 'OK'
            showErrorAlert();
        }
    } catch (error) {
        // Mostrar SweetAlert de error si hay un error en la solicitud
        showErrorAlert();
    }

})




const showErrorAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
    });
};

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
    const data = await response.text(); // Obtener la respuesta como texto
    return data;
};