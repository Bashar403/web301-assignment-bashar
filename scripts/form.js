// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    // Swiper options
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // jQuery Validation for Payment Information
  $(document).ready(function () {
    $("#payment-info-form").validate({
      rules: {
        'cc-number': {
          required: true,
          digits: true,
          minlength: 16,
          maxlength: 16
        },
        'cvv': {
          required: true,
          digits: true,
          minlength: 3,
          maxlength: 3
        }
      },
      messages: {
        'cc-number': {
          required: "Please enter your credit card number",
          digits: "Please enter only digits",
          minlength: "Your credit card number must be 16 digits",
          maxlength: "Your credit card number must be 16 digits"
        },
        'cvv': {
          required: "Please enter your CVV",
          digits: "Please enter only digits",
          minlength: "Your CVV must be 3 digits",
          maxlength: "Your CVV must be 3 digits"
        }
      },
      submitHandler: function(form) {
        alert('Payment form is valid!');
        return false;
      }
    });
  });
  