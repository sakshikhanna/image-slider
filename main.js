

var ImageSlider = function( parentElementClass, childElementClass, speed ) {

	var options = {};

	var currentActiveItem;
	var action = -1;

	/**
	 * [setDefaultOptions description]
	 */
	function setDefaultOptions() {
		parentElementClass = parentElementClass || '.is-parent-container';
		childElementClass = childElementClass || '.is-child-container';
		speed = speed || 500;

		// ( parentElementClass == undefined ) 	? parentElementClass : '.is-parent-container';
		// ( childElementClass == undefined ) 	? childElementClass : '.is-child-container';
		// ( speed == undefined ) 				? speed : '.is-child-container';

		options = {
			parentElementClass : parentElementClass,
			childElementClass  : childElementClass,
			speed  : speed
		};

	}

	/**
	 * function to calculate the total width of the container
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	function calculateTotalWidth() {
	 	var width = 0;
		$( options.childElementClass ).each( function() {
			var elementWidth = $( this ).outerWidth( true );
			width += elementWidth;
			// console.log( 'width : ' + elementWidth );
	  	});
		return width;
	}

	 /**
	  * calculate the center position of the window
	  * @return {[type]} [description]
	  */
	function windowMidPosition() {
		var windowWidth = parseInt( $( window ).width(), 10 );
		var midScreen = parseInt( windowWidth/2, 10 );
		// console.log( 'screen middle' + midScreen );
		return midScreen;
	 }

	 /**
	  * calculate the  x-position difference
	  * @param  {[type]} obj [description]
	  * @return {[type]}     [description]
	  */

	/**
	 * [calMarginLeft description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	function calMarginLeft( obj ) {
		var pos = $( obj ).offset();
		var x = parseInt( pos.left, 10 );
		var width = $( obj ).outerWidth( true );
		var left = x + width/2;
		var leftPosition = left - windowMidPosition();
		return leftPosition;
	}

	/**
	 * [calculate description]
	 * @return {[type]} [description]
	 */
	function calculate( $activeElement ) {
		currentActiveItem = $activeElement;
		var totalWidth = calculateTotalWidth();
		$( options.parentElementClass ).width( totalWidth );
		var midScreen 	  = windowMidPosition();
		var leftPosition  = calMarginLeft( $activeElement);
		var currentMargin = parseInt( $( options.parentElementClass ).css( 'margin-left' ).replace( "px", "" ) );
		var finalMargin   = currentMargin - leftPosition;
		$( options.parentElementClass ).animate( { 'marginLeft': finalMargin }, options.speed );
	}

	/**
	 * [domEvents description]
	 * @return {[type]} [description]
	 */
	
	function domEvents() {
		$('.crs-top-section ,.header-container, .crs-perks-container, .crs-job-posting-section, .footer-container ').click(function(){
			action = -1;			
		});
		$( options.childElementClass ).click( function() {
			console.log( 'domEvents called' );
			calculate( this );			
			action =  1;			
		});	
		$(".crs-image-item").swipe( {
		  //Generic swipe handler for all directions
		  swipeLeft:function(event, direction, distance, duration, fingerCount) {
		  next(); 
		  },
		  swipeRight:function(event, direction, distance, duration, fingerCount) {
		  prev(); 
		  }




		  
		  //Default is 75px, set to 0 for demo so any distance triggers swipe
		  // threshold:0
		});	
	}
	$( document ).keydown(function(e) {
		if( action === 1 ){
			arrowKeys( e );
		}
	});
	function arrowKeys( e ){
		// console.log('YES');
		switch( e.which ) {
            case 37: // left
            console.log('action : prev : ');	
            prev();
            break;
            case 39: // right
            console.log('action : next : ');
            next();
            break;

            default: return; // exit this handler for other keys
        }
   	}
	function next() {
		console.log( currentActiveItem );
		currentActiveItem = currentActiveItem || $( options.childElementClass ).first();
		var nextItem = $( currentActiveItem ).next();
		console.log( nextItem );

		if ( nextItem.length === 0 ) {
			nextItem = $( options.childElementClass ).first();
		}
		calculate( nextItem );
	}

	function prev() {
		currentActiveItem = currentActiveItem || $( options.childElementClass ).last();
		var prevItem = $( currentActiveItem ).prev();
		if ( prevItem.length === 0 ) {
			prevItem = $( options.childElementClass ).last();
		}
		calculate( prevItem );
	}


	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
	(function init() {
		console.log( 'called' );
		setDefaultOptions();
		domEvents();
		next();
	})();

	return {
		next 	   : next,
		prev 	   : prev,

	}
};
