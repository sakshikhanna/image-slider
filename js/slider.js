 // window.currentImageSlider = new ImageSlider( '.image-container-list', '.list-item', 500 );
 var defaults = {
 	parentClass = '.image-container-list',
 	childClass = '.list-item',
 	speed = 500
 }

  window.currentImageSlider = new ImageSlider( defaults );
    $( '.crs-image-section-next' ).on( 'click', function() {
        currentImageSlider.next();
    });

    $( '.crs-image-section-prev' ).on( 'click', function() {
        currentImageSlider.prev();
    });