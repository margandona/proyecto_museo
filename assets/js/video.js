function mostrarVideo() {
    // URL del video de YouTube
    var videoUrl = ''; // Puedes cambiar esto por el enlace del video que desees mostrar

    // Crea el código HTML para el reproductor de video
    var videoHTML = '<div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">';
    videoHTML += '<div class="modal-dialog modal-lg">';
    videoHTML += '<div class="modal-content">';
    videoHTML += '<div class="modal-header">';
    videoHTML += '<h5 class="modal-title" id="videoModalLabel">Reproductor de Video</h5>';
    videoHTML += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    videoHTML += '</div>';
    videoHTML += '<div class="modal-body">';
    videoHTML += '<div class="embed-responsive embed-responsive-16by9">';
    videoHTML += '<iframe class="embed-responsive-item" src="' + videoUrl + '" allowfullscreen></iframe>';
    videoHTML += '</div>';
    videoHTML += '</div>';
    videoHTML += '</div>';
    videoHTML += '</div>';
    videoHTML += '</div>';

    // Agrega el reproductor de video al cuerpo del documento
    document.body.insertAdjacentHTML('beforeend', videoHTML);

    // Muestra el modal del reproductor de video
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
  }