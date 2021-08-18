$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
  
    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
      alert('Add some item');
    }
  
    $input.val(value);
  
  });
  
  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
  
    if (value < 10) {
      value = value + 1;
    } else {
      value = 10;
      alert('Max Limit Reach');
    }
  
    $input.val(value);
  });
//    This is using Jquery $ is used as a shortcut document.getElement by id or by query or anything  
//    here I first select a class of minus button and then create a instance of that using "this" so that it refers to the button that we are clicking 
//    uske baad plus ko plus aur minus ko minus
