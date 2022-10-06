// Type In Blur Arabic Cursor To Right
function cursorRightInType(selector) {
  if (selector) {
    selector.onfocus = function (e) {
      this.style.direction = "rtl";
    };
    selector.onblur = function (e) {
      if (this.value == "") {
        this.style.direction = "ltr";
      } else {
        this.style.direction = "rtl";
      }
    };
  }
}

let patternEng =
  /^[A-Za-z0-9_ $&+,=?@#|<>.^*()%!-][A-Za-z0-9_ $&+,=?@#|<>.^*()%!/-]*$/;
let patternAr = /^[\u0621-\u064A0-9 _ $&+,=?@#|<>./^*()%!-]+$[آؤءئ إ لأأ أ]*$/;

let patetrnCheck;
function validationPattern(selector, msg, lang) {
  if (selector) {
    selector.onkeyup = function (e) {
      if (lang === "ar") {
        patetrnCheck = patternAr;
      } else {
        patetrnCheck = patternEng;
      }
      if (patetrnCheck.test(selector.value) != true) {
        // selector.value = "";
        selector.style.border = "2px solid red";
        if (selector.classList.contains("inp-pattern-eng")) {
          let eng = true;
          let error = true;
          showMsgFieldPattern(selector, msg, eng, error);
        } else {
          let eng = false;
          let error = true;
          showMsgFieldPattern(selector, msg, eng, error);
        }
      } else {
        selector.style.border = "2px solid green";
        if (selector.classList.contains("inp-pattern-eng")) {
          let eng = true;
          let error = false;
          showMsgFieldPattern(selector, msg, eng, error);
        } else {
          let eng = false;
          let error = false;
          showMsgFieldPattern(selector, msg, eng, error);
        }
      }
    };
  }
}

// Show Message
function showMsgFieldPattern(selector, msg, eng, error) {
  if (error == true) {
    if (eng == true) {
      selector.parentElement.nextElementSibling.classList.add("show");
      selector.parentElement.nextElementSibling.classList.add(
        "pattern-invalid"
      );
      selector.parentElement.nextElementSibling.classList.remove(
        "pattern-valid"
      );
      selector.parentElement.nextElementSibling.classList.innerHTML = msg;
    } else {
      selector.parentElement.nextElementSibling.classList.add("show");
      selector.parentElement.nextElementSibling.classList.add(
        "pattern-invalid"
      );
      selector.parentElement.nextElementSibling.classList.remove(
        "pattern-valid"
      );
      selector.parentElement.nextElementSibling.innerHTML = msg;
    }
  } else {
    if (eng == true) {
      selector.parentElement.nextElementSibling.classList.add("show");
      selector.parentElement.nextElementSibling.classList.remove(
        "pattern-invalid"
      );
      selector.parentElement.nextElementSibling.classList.add("pattern-valid");
      selector.parentElement.nextElementSibling.classList.innerHTML =
        "correct letters";
    } else {
      selector.parentElement.nextElementSibling.classList.add("show");
      selector.parentElement.nextElementSibling.classList.remove(
        "pattern-invalid"
      );
      selector.parentElement.nextElementSibling.classList.add("pattern-valid");
      selector.parentElement.nextElementSibling.innerHTML = "correct letters";
    }
  }
}
