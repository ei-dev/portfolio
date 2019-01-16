;(function() {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es", "jp"];

  var greetings = {
    en: "Hello",
    es: "Hola",
    jp: "こんにちは"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
    jp: "ようこそ"
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
    jp: "ログイン中"
  };

  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + this.commaCheck() + this.firstName + "!";
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + this.commaCheck() + this.fullName() + "!";
    },

    greet: function(formal) {
      var msg;
      if (formal === true) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "Missing jQuery selector";
      }

      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    },

    commaCheck: function() {
      var comma;
      this.language !== "jp" ? comma = ", " : comma = "、";
      return comma;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.language = language || "en";
    this.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  window.Greetr = window.G$ = Greetr;
})();
