 // window.currentImageSlider = new ImageSlider( '.image-container-list', '.list-item', 500 );
 var defaults = {
 	parentClass : '.image-container-list',
 	childClass : '.list-item',
 	speed : 500
 }

  window.currentImageSlider = new ImageSlider( defaults );
    $( '.next-arrow' ).on( 'click', function() {
        currentImageSlider.next();
    });

    $( '.prev-arrow' ).on( 'click', function() {
        currentImageSlider.prev();
    });