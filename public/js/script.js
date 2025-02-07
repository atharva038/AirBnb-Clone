
  // Example of custom validation
  (function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission
          event.stopPropagation(); // Stop event bubbling
        }

        form.classList.add('was-validated'); // Add Bootstrap's validation class
      }, false);
    });
  })();

