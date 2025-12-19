// contact-validation.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  // Email validation regex
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Real-time validation
  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', () => {
      // Checkbox skip for input event
      if (input.type === 'checkbox') return;

      if (input.checkValidity() && (input.type !== 'email' || isValidEmail(input.value))) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
      }
    });
  });

  // On form submit
  form.addEventListener('submit', (e) => {
    let valid = true;

    form.querySelectorAll('input, select').forEach(input => {
      if (input.type === 'checkbox') {
        if (!input.checked) {
          input.classList.add('is-invalid');
          valid = false;
        } else {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
        return;
      }

      if (!input.checkValidity() || (input.type === 'email' && !isValidEmail(input.value))) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }
    });

    if (!valid) {
      e.preventDefault(); // prevent submission
      e.stopPropagation();
      alert("Please correct the errors highlighted in the form!");
    }
  });
});



  function updateDateTime() {
      const now = new Date();
      const options = { 
          weekday: 'short',
          year: 'numeric', 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit'
      };
      document.getElementById('current-datetime').innerText = now.toLocaleString('en-US', options);
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

