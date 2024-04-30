const pintarProductos = (imgoferta) => {
    const contenedor = document.getElementById("producto-contenedor");

    // Crear un nuevo div con clase 'row'
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    imgoferta.forEach(producto => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'mb-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        // Ajustar el ancho de cardDiv
        cardDiv.style.width = '80%'; // Puedes ajustar el valor según tus necesidades
        cardDiv.style.height = '60vh'; // Puedes ajustar el valor según tus necesidades
        cardDiv.style.marginBottom = '10px'; // Ajusta el valor según tus necesidades

        // Formatear la descripción con saltos de línea
        const descFormatted = producto.desc.split('\n').map(line => line.trim()).join('<br>');

        cardDiv.innerHTML = `
        <div class="row g-0" >
        <div class="col-md-6 col-lg-5 g-4">
            <div class="img-container" style="overflow: hidden;">
                <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </div>
        <div class="col-md-6 col-lg-5 g-4">
            <div class="card-body">
            <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-bottom: 10px; color: black;">${producto.nombre}</h5>
                <p class="card-text p-custom" style="padding-bottom: 10px; line-height: 1.5;  font-size:70%;">${descFormatted}</p>
                <a class="btn-floating p-custom halfway-fab waves-effect waves-light red" style="position: absolute; bottom: 10px; right: 10px;"></a>
                <button class="btn btn-warning btn-lg" onclick="mostrarContacto()" style="background-color: #ffa500; margin-top: 10px; width: 100%;">Contacto</button>
            </div>
        </div>
    </div>
        `;

        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv); // Agregar cada tarjeta al div de la fila
    });

    contenedor.appendChild(rowDiv); // Agregar la fila al contenedor
};

// Función para mostrar información de contacto (SweetAlert2)
function mostrarContacto() {
    Swal.fire({
        title: "¡Contáctanos para más información!",
        icon: "info",
        html: `
          Utiliza los siguientes enlaces:<br>
          <a href="https://wa.me/+56951906473" class="btn btn-success btn-lg mb-2"><i class="fab fa-whatsapp"></i> WhatsApp</a><br>
          <a href="https://www.facebook.com/profile.php?id=61552557989832&mibextid=2JQ9oc" class="btn btn-primary btn-lg mb-2"><i class="fab fa-facebook"></i> Facebook</a><br>
          <a href="https://instagram.com/solarysustentable?utm_source=qr&igshid=MWM1ZW1oYXlucHB4cg==" class="btn btn-danger btn-lg mb-2"><i class="fab fa-instagram"></i> Instagram</a>
        `,
        showCloseButton: true,
        showCancelButton: false,  // Ocultar el botón "Cancelar"
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> OK!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        confirmButtonColor: "#ffa500",  // Cambiar a amarillo
    });
}




$('.logos-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 3
    }
    }, {
    breakpoint: 520,
    settings: {
    slidesToShow: 2
    }
    }]
    });






