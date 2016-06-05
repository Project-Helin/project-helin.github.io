$( document ).ready( function( $ ) {
  var userLang = navigator.language || navigator.userLanguage;

  console.log(userLang);

  var i18n = $.i18n();
  i18n.locale = "de";

  var language = $('.language option:selected').val();

  i18n.load('i18n/' + i18n.locale + '.json', i18n.locale).done(function() {
    $('[data-i18n]').i18n()
  });

  i18n.debug = true;

});
