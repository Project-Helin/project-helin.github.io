function updateLanguage(reload) {
  var userLang = window.language || navigator.language || navigator.userLanguage;
  var langCode = userLang.substr(0, 2);
  var defaultLanguage = "en";
  
  var supportedLanguages = ["en", "de"];

  var i18n = $.i18n();

  var languageSupported = supportedLanguages.filter(function (supportedLang) {
    return supportedLang === langCode;
  })[0];

  if (languageSupported) {
    i18n.locale = langCode;
    console.log(langCode);

    if (i18n.locale != defaultLanguage) {
      i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(function () {
        $('[data-i18n]').i18n()
      });
    } else if (reload) {
      location.reload();
    }
  }
}

$(document).ready(function () {
  updateLanguage();

});

function languageChosen(event, lang) {
  event.preventDefault();
  window.language = lang;
  updateLanguage(true);
}
