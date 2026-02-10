// Cargar HTML antes de ejecutar el código
$(document).ready(function() {

    // EVENTO 1: MODO OSCURO 
    $("#toggle-theme").click(function() {
        // toggleClass agrega la clase si no está, y la quita si ya está
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")){
            $(this).html('<i class="bi bi-lightbulb-fill"></i> Encender');
        } else {
            $(this).html('<i class="bi bi-lightbulb"></i> Apagar')
        }
    });

    // EVENTO 2: BOTÓN DE SALUDO
    $("#btn-saludo").click(function() {
        alert("¡Hola! Gracias por visitar mi portafolio");
        $(this).text("¡Saludo Enviado").addClass("btn-success").removeClass("btn-primary");
    });

    // EVENTO 3: VALIDACIÓN DE FORMULARIO
    $("#contact-form").submit(function(event) {
        //PREVENIR QUE LA PÁGINA SE RECARGUE
        event.preventDefault();

        //OBTENER VALORES
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let mensaje = $("#mensaje").val();
        let valido = true;

        if (nombre, email, mensaje === "") {
            $("#nombre", "#email", "#mensaje").addClass("is-invalid");
            valido = false;
            alert("Por favor completa todos los campos.");
        } else {
            $("#nombre", "#email", "#mensaje").removeClass("is-invalid").addClass("is-valid");
        }

        // Si es válido
        if (valido) {
            $("#form-succes").removeClass("d-none").fadeIn();
            alert("¡Gracias por contactarme, " + nombre + "! Te responderé pronto.");
            this.reset();
        }
    })

    // Animación de scroll
    $(window).scroll(function() {
        // para cada sección con la clase .fade-in-section
        $(".fade-in-section").each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // Si la ventana bajó hasta donde está el objeto, agregamos la clase visible
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass("is-visible");
            }
        });
    });
    $(window).trigger('scroll');

    // crear plugin fadeInSection
    $.fn.fadeInSection = function() {
        this.each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).addClass("is-visible");
            }
        });
        return this; // para permitir encadenamiento
    }
});