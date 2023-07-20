
var $grid;
$(document).ready(function(){
    
    $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    
      $('[data-filter]').on('click', function(){
          var filter = $(this).data('filter');
          $grid.isotope({ filter: filter });
      })
});
