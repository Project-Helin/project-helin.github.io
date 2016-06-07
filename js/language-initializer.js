function updateLanguage(reload) {
  var langCode = document.location.hash.substr(1, 3) || navigator.language.substr(0, 2) || navigator.userLanguage.substr(0, 2);
  var supportedLanguages = ["en", "de"];
  var defaultLanguage = "en";


  var languageSupported = supportedLanguages.filter(function (supportedLang) {
    return supportedLang === langCode;
  })[0];

  if (!languageSupported) {
    langCode = defaultLanguage;
  }

  //write lang to url in order to preserve it after reload
  document.location.hash = langCode;

  var i18n = $.i18n();
  i18n.locale = langCode;

  if (i18n.locale != defaultLanguage) {
    i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(function () {
      $('[data-i18n]').i18n()
    });
  } else if (reload) {
    location.reload();
  }

}

$(document).ready(function () {
  updateLanguage();
});

function languageChosen(event, lang) {
  event.preventDefault();
  document.location.hash = lang;
  updateLanguage(true);
}
