var EmailObfuscator = {
  // Collect all HTML elements with class="email"
  collect_emails: function() {
    var emails = document.getElementsByClassName("email");

    for (var i=0; i<emails.length; i++) {
      EmailObfuscator.convert(emails[i]);
    }
  },

  // Convert selected element to a mailto: link
  convert: function(element) {
    var email = element.innerHTML.replace(/ AT /i, '@').replace(/ \. /g, '.').replace(/ DOT /ig, '.');
    var link = '<a href="mailto:' + email + '">' + email + '</a>';

    element.innerHTML = link;
  }
}

// Add onLoad event
window.addEventListener('load', function() {
  EmailObfuscator.collect_emails();
});
