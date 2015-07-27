# image-slider
A simple implementation of a horizontal image slider.

**How to use**

Your HTML can be of any structure just that it has to contain a parent element and all the items inside should have the same class.

```html
<div class="image-container">
    <li class="image-container-item"><img src="" alt=""></li>
    <li class="image-container-item"><img src="" alt=""></li>
    <li class="image-container-item"><img src="" alt=""></li>
    <li class="image-container-item"><img src="" alt=""></li>
    <li class="image-container-item"><img src="" alt=""></li>
</div>
```

In order to get started you would have to include the ``main.js`` file. Also this library is based on jQuery so make sure it is included before the ``main.js`` file.

```js
var parentElementClass = '.image-container';
var childElementClass  = '.image-container-item';
var slideSpeed         = 500;

var sliderController = new ImageSlider( parentElementClass, childElementClass, slideSpeed );
```

#### next() and prev()
You can also call the next and previous functions yourself.

```js

var sliderController = new ImageSlider();

// let's say we have a next and previous buttons clicking on which would make the slider move
$( '.next-button' ).on( 'click', function() {
    sliderController.next();
});

$( '.prev-button' ).on( 'click', function() {
    sliderController.prev();
});

```
# Licence

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
