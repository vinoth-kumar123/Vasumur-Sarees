document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email) {
    status.textContent = 'Please fill in your name and email.';
    return;
  }

  // No backend is connected yet — this just confirms the form works.
  // Swap this block for a real fetch() call to your server or form service
  // when you're ready to receive messages.
  console.log('Contact form submitted:', { name, email, message });

  status.textContent = 'Thanks, ' + name + '! We will get back to you soon.';
  form.reset();
});
