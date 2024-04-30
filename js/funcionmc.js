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