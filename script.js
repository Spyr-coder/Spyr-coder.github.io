// BUTTON CLICK INTERACTION
document.getElementById('clickBtn').addEventListener('click', function() {
  document.getElementById('clickMessage').textContent = 'You clicked the button!';
});

// HOVER EFFECT (Handled in CSS, see style.css)

// KEYPRESS DETECTION
document.getElementById('keypressInput').addEventListener('keydown', function(e) {
  document.getElementById('keyDisplay').textContent = `You pressed: ${e.key}`;
});

// BONUS: DOUBLE CLICK ACTION
document.getElementById('secretBtn').addEventListener('dblclick', function() {
  document.getElementById('secretMessage').textContent = '🎉 Secret Unlocked!';
});

// BUTTON THAT CHANGES TEXT/COLOR
document.getElementById('colorChangeBtn').addEventListener('click', function() {
  this.style.backgroundColor = '#FF5733';
  this.textContent = 'Color Changed!';
});

// IMAGE GALLERY / SLIDESHOW
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let current = 0;
function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById('galleryImg').src = images[current];
}

// TABS / ACCORDION CONTENT
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// FORM VALIDATION
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const message = document.getElementById('formMessage');

  if (!name || !email || !password) {
    message.textContent = 'All fields are required.';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    message.textContent = 'Password must be at least 8 characters long.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';
});

// REAL-TIME PASSWORD FEEDBACK
document.getElementById('password').addEventListener('input', function() {
  const feedback = document.getElementById('formMessage');
  if (this.value.length < 8) {
    feedback.textContent = 'Password too short';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = 'Strong password';
    feedback.style.color = 'green';
  }
});
