$(document).ready(function() {
    $('.thumbnail-gallery').magnificPopup({
        delegate: 'figure a',
        type: 'image',
        gallery: { 
            enabled: true 
        },
        image: { 
            titleSrc: function(anchor) {
                return anchor.el.find('img').attr('alt');
            } 
        }
    });    
});