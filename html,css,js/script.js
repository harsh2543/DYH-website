$(document).ready(function(){
  $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topbtn').fadeIn();
        } else{
            $('#topbtn').fadeOut();
        }
    });

    $("#topbtn").click(function(){
        $('html, body').animate({scrollTop : 0}, 60);
    });
});  
   
$(document).ready(function(){
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(document).ready(function () {
  function closeMenu() {
    $('#check').prop('checked', false); // Uncheck the checkbox
    $('section').removeClass('blur'); // Remove blur when the menu is closed
  }

  // Smooth scroll to the section on menu item click
  $('.menu-item').click(function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    closeMenu(); // Close the menu

    // Get the target section ID from the clicked menu item's href attribute
    const targetSection = $(this).attr('href');

    // Get the height of the sticky header to adjust the scroll position
    const headerHeight = $('nav').outerHeight();

    // Smoothly scroll to the target section, adjusted for the sticky header
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top - headerHeight
    }, 600);

    // Remove 'highlight' class from all headers
    $('section h1').removeClass('highlight');

    // Add 'highlight' class to the target section header
    $(targetSection + ' h1').addClass('highlight');
  });

  // Handle changes to the checkbox state
  $('#check').change(function () {
    if ($(this).is(':checked')) {
      $('section').addClass('blur');
    } else {
      $('section').removeClass('blur');
    }
  });

  // Handle clicks on the section to close the menu
  $('section').click(function () {
    if ($('#check').is(':checked')) { // Only close if the menu is open
      closeMenu(); // Close the menu when the section is clicked
    }
  });
});
