/* ===========================================
   Main JS - Tanit Physiotherapie Berlin
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Mobile Nav Toggle ==========
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ========== Nav Scroll Effect ==========
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    });
  }

  // ========== Contact Form ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const vorname = document.getElementById('vorname');
      const nachname = document.getElementById('nachname');
      const email = document.getElementById('email');
      const nachricht = document.getElementById('nachricht');
      const datenschutz = document.getElementById('datenschutz');

      // Basic validation
      if (!vorname.value.trim() || !nachname.value.trim() || !email.value.trim() || !nachricht.value.trim()) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
      }

      if (!datenschutz.checked) {
        alert('Bitte akzeptieren Sie die Datenschutzbestimmungen.');
        return;
      }

      // Build mailto link as fallback
      const subject = encodeURIComponent('Terminanfrage Tanit Physiotherapie');
      const body = encodeURIComponent(
        `Name: ${vorname.value.trim()} ${nachname.value.trim()}\n` +
        `E-Mail: ${email.value.trim()}\n` +
        `Telefon: ${(document.getElementById('telefon')?.value || '').trim()}\n` +
        `Dienstleistung: ${(document.getElementById('dienstleistung')?.value || '').trim()}\n\n` +
        `Nachricht:\n${nachricht.value.trim()}`
      );

      // Submit via mailto
      window.location.href = `mailto:praxis@tanit-physiotherapie-berlin.de?subject=${subject}&body=${body}`;

      // Show success message
      alert('Vielen Dank! Ihre Anfrage wird an: praxis@tanit-physiotherapie-berlin.de gesendet. Wir melden uns umgehend bei Ihnen.');

      // Reset form
      contactForm.reset();
    });
  }
});
