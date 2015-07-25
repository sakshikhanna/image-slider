 window.currentImageSlider = new ImageSlider( '.image-container-list', '.list-item', 500 );
    $( '.crs-image-section-next' ).on( 'click', function() {
        currentImageSlider.next();
    });

    $( '.crs-image-section-prev' ).on( 'click', function() {
        currentImageSlider.prev();
    });