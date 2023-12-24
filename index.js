  <script>
    // Texto dinámico
    const dynamicText = "Hola, soy Ignacio bienvenid@ a mi CV online";
    const textElement = document.getElementById('dynamic-text');
    let index = 0;

    function animateText() {
      const text = dynamicText.slice(0, index);
      const typingBar = index < dynamicText.length ? '<span class="typing-bar"></span>' : '';

      textElement.innerHTML = `${text}${typingBar}`;

      if (index < dynamicText.length) {
        index++;
        setTimeout(animateText, 150);
      } else {
        setTimeout(() => {
          index = 0;
          animateText();
        }, 1000);
      }
    }

    // Desplazamiento suave al hacer clic en el enlace del currículum
    document.getElementById('resume-link').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Mostrar la sección del currículum al cargar la página
    window.addEventListener('load', function() {
      document.getElementById('resume-section').style.opacity = '1';
      document.getElementById('resume-section').style.transform = 'translateY(0)';
      animateText(); // Iniciar la animación después de que se cargue la página
    });

    // Función para mostrar/ocultar la información de contacto
    function toggleContactInfo() {
      const contactInfoSection = document.getElementById('contact-info-section');
      contactInfoSection.classList.toggle('active');
    }
  </script>
