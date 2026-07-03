var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
  <meta charset="UTF-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1">\
  <meta http-equiv="X-UA-Compatible" content="ie=edge">\
  <style>@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 700;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Bold.woff") format("woff");\
}\
\
@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 500;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Medium.woff") format("woff");\
}\
\
@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 400;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Regular.woff") format("woff");\
}\
\
* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "KyivTypeSans", sans-serif;\
  font-weight: 400;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
body {\
  overflow: hidden;\
}\
\
a {\
  color: inherit;\
  text-decoration: none;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(33, 33, 51, 0.65);\
  -webkit-backdrop-filter: blur(5px);\
          backdrop-filter: blur(5px);\
}\
\
.wrapper__body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
  padding: 15px;\
  position: relative;\
  z-index: 2;\
}\
\
.quiz-card {\
  background: #fff;\
  width: 100%;\
  max-width: 904px;\
  max-height: calc(100vh - 30px);\
  position: relative;\
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\
  overflow-x: hidden;\
  overflow-y: auto;\
}\
\
.quiz-close {\
  cursor: pointer;\
  width: 20px;\
  height: 20px;\
  position: absolute;\
  top: 14px;\
  right: 18px;\
  z-index: 20;\
  display: block;\
}\
\
.quiz-close::before,\
.quiz-close::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  left: 50%;\
  width: 1.5px;\
  height: 18px;\
  margin-top: -9px;\
  margin-left: -0.75px;\
  background: #fff;\
  border-radius: 1px;\
}\
\
.quiz-close::before {\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.quiz-close::after {\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
}\
\
.quiz-screen {\
  display: -ms-flexbox;\
  display: flex;\
  width: 100%;\
  min-height: 460px;\
  overflow: hidden;\
}\
\
.quiz-left {\
  width: 305px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  position: relative;\
}\
\
.quiz-left--salmon {\
  background: #ee7668;\
}\
\
.quiz-left--purple {\
  background: #4b54a0;\
}\
\
.quiz-left--yellow {\
  background: #ffdc6a;\
}\
\
.quiz-left .quiz-close {\
  top: 14px;\
  right: 14px;\
}\
\
.quiz-left__img {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
}\
\
.quiz-right {\
  -ms-flex: 1;\
      flex: 1;\
  padding: 36px 40px 30px 36px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  position: relative;\
}\
\
.quiz-right--intro {\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.quiz-right--email {\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.quiz-right--result {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
}\
\
.quiz-screen--start {\
  -ms-flex-direction: column;\
      flex-direction: column;\
  min-height: 512px;\
}\
\
.start-header {\
  background: #ee7668;\
  min-height: 132px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  position: relative;\
  padding: 20px 50px 18px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.start-title {\
  font-size: 32px;\
  font-weight: 700;\
  color: #fff;\
  line-height: 1.2;\
  text-align: center;\
}\
\
.start-subtitle {\
  font-size: 16px;\
  font-weight: 400;\
  color: rgba(255, 255, 255, 0.75);\
  line-height: 1.3;\
  text-align: center;\
  margin-top: 8px;\
}\
\
.start-body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex: 1;\
      flex: 1;\
  min-height: 380px;\
  background: #fff;\
}\
\
.start-photo {\
  width: 365px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  overflow: hidden;\
  border-radius: 0 204px 204px 0;\
}\
\
.start-photo img {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
}\
\
.start-content {\
  -ms-flex: 1;\
      flex: 1;\
  padding: 30px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.start-heading {\
  font-size: 24px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.2;\
  margin-bottom: 20px;\
}\
\
.start-text {\
  font-size: 16px;\
  font-weight: 400;\
  color: #000;\
  line-height: 1.5;\
  margin-bottom: 16px;\
}\
\
.start-text strong {\
  font-weight: 700;\
}\
\
.start-btn-wrap {\
  position: relative;\
  width: 100%;\
  height: 74px;\
  margin-top: auto;\
}\
\
.start-btn {\
  position: absolute;\
  top: 9px;\
  left: 0;\
  right: 0;\
  height: 65px;\
  background: #ee7668;\
  color: #fff;\
  border: none;\
  border-radius: 100px;\
  font-size: 16px;\
  font-weight: 700;\
  font-family: "KyivTypeSans", sans-serif;\
  text-transform: uppercase;\
  letter-spacing: 0.02em;\
  cursor: pointer;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  transition: opacity 0.15s, -webkit-transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s, -webkit-transform 0.1s;\
}\
\
.start-btn:active {\
  -webkit-transform: scale(0.98);\
          transform: scale(0.98);\
}\
\
.start-btn-border {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 65px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
  z-index: 2;\
}\
\
.quiz-header {\
  background: #ee7668;\
  padding: 30px;\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 132px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.quiz-header--full {\
  width: 100%;\
}\
\
.quiz-header .quiz-close {\
  top: 12px;\
  right: 14px;\
}\
\
.quiz-header-q {\
  font-size: 20px;\
  font-weight: 700;\
  color: #fff;\
  line-height: 1.35;\
  width: 100%;\
  text-align: center;\
}\
\
#s1,\
#s2,\
#s3,\
#s4,\
#s5,\
#s6,\
#s7,\
#s8,\
#s9,\
#s10 {\
  -ms-flex-direction: column;\
      flex-direction: column;\
  min-height: 500px;\
}\
\
.quiz-body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex: 1;\
      flex: 1;\
  padding: 30px;\
  gap: 30px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.quiz-body--full {\
  -ms-flex-direction: column;\
      flex-direction: column;\
  padding: 30px;\
  gap: 0;\
}\
\
.quiz-painting-col {\
  width: 417px;\
  height: 307px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.quiz-painting-col--grid {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  width: 422px;\
}\
\
.quiz-painting-col--grid .quiz-paintings-grid {\
  height: 307px;\
}\
\
#s6 .quiz-answer {\
  height: 50px;\
}\
\
#s7 .quiz-answer {\
  height: 76px;\
}\
\
#s7,\
#s8 {\
  height: 615px;\
}\
\
#s8 .quiz-answer {\
  height: 76px;\
}\
\
#s9 {\
  height: 690px;\
}\
\
#s9 .quiz-painting-col {\
  height: 498px;\
}\
\
#s9 .quiz-answers-col {\
  height: 498px;\
}\
\
#s10 {\
  height: 615px;\
}\
\
#s10 .quiz-answer {\
  height: 76px;\
}\
\
.quiz-painting-bg {\
  width: 100%;\
  height: 100%;\
  overflow: hidden;\
  position: relative;\
}\
\
.quiz-painting-bg--yellow {\
  background: #ffdc6a;\
}\
\
.quiz-painting-bg--coral {\
  background: #ee7668;\
}\
\
.quiz-painting-img {\
  width: 100%;\
  height: 100%;\
  display: block;\
}\
\
.quiz-paintings-grid {\
  display: grid;\
  grid-template-columns: 1fr 1fr;\
  gap: 8px;\
  width: 100%;\
}\
\
.quiz-paint-cell {\
  overflow: hidden;\
  position: relative;\
}\
\
.quiz-paint-cell--yellow {\
  background: #ffdc6a;\
}\
\
.quiz-paint-cell--coral {\
  background: #ee7668;\
}\
\
.quiz-paint-cell img:not(.quiz-zoom-icon) {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
}\
\
.quiz-answers-col {\
  -ms-flex: 1;\
      flex: 1;\
  height: 307px;\
  padding: 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.quiz-answers {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 10px;\
  -ms-flex: none;\
      flex: none;\
}\
\
.quiz-answers--full {\
  gap: 10px;\
  margin-bottom: 14px;\
  -ms-flex: unset;\
      flex: unset;\
}\
\
.quiz-answer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 15px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  min-height: 50px;\
  padding: 8px 15px;\
  cursor: pointer;\
  font-size: 16px;\
  color: #000;\
  line-height: 1.3;\
  transition: background 0.15s, border-color 0.15s;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
}\
\
.quiz-answer--wide {\
  height: auto;\
  min-height: 50px;\
  font-size: 14px;\
  padding: 10px 16px;\
}\
\
.quiz-answer input[type=radio] {\
  appearance: none;\
  -webkit-appearance: none;\
  width: 19px;\
  height: 19px;\
  min-width: 19px;\
  border-radius: 50%;\
  border: 2px solid #2e377b;\
  cursor: pointer;\
  transition: all 0.15s;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.quiz-answer input[type=radio]:checked {\
  background: #2e377b;\
  border-color: #2e377b;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-answer.is-correct {\
  border-color: #1d9200;\
  color: #1d9200;\
}\
\
.quiz-answer.is-correct input[type=radio] {\
  border-color: #1d9200;\
  background: #1d9200;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-answer.is-wrong {\
  border-color: #d00;\
  color: #d00;\
}\
\
.quiz-answer.is-wrong input[type=radio] {\
  border-color: #d00;\
  background: #d00;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-body--feedback-img {\
  -ms-flex-direction: row;\
      flex-direction: row;\
  padding: 0;\
  gap: 0;\
  -ms-flex-align: stretch;\
      align-items: stretch;\
}\
\
.quiz-body--feedback-img .quiz-image-answers {\
  width: 246px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  padding: 30px 15px 30px 32px;\
  gap: 0;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  margin-bottom: 0;\
}\
\
.quiz-body--feedback-img .quiz-image-answer {\
  -ms-flex: unset;\
      flex: unset;\
  width: 100%;\
  padding: 0;\
  border-radius: 4px;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.quiz-body--feedback-img .quiz-image-answer.is-selected,\
.quiz-body--feedback-img .quiz-image-answer.is-correct,\
.quiz-body--feedback-img .quiz-image-answer.is-wrong {\
  border-color: transparent;\
}\
\
.quiz-body--feedback-img .quiz-image-answer > span {\
  display: none;\
}\
\
.quiz-body--feedback-img .quiz-image-answer__img-wrap {\
  width: 100%;\
  border-radius: 4px;\
}\
\
.quiz-body--feedback-img .quiz-answers-col {\
  -ms-flex: 1;\
      flex: 1;\
  height: auto;\
  padding: 30px 30px 30px 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: end;\
      align-items: flex-end;\
}\
\
.quiz-image-answers {\
  display: -ms-flexbox;\
  display: flex;\
  gap: 12px;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex: 1;\
      flex: 1;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  padding: 6px 0 12px;\
}\
\
.quiz-image-answer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 7px;\
  cursor: pointer;\
  width: 200px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  border: 2px solid transparent;\
  border-radius: 8px;\
  transition: border-color 0.15s;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
}\
\
.quiz-image-answer input[type=radio] {\
  appearance: none;\
  -webkit-appearance: none;\
  width: 19px;\
  height: 19px;\
  min-width: 19px;\
  border-radius: 50%;\
  border: 2px solid #2e377b;\
  cursor: pointer;\
  transition: all 0.15s;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  -ms-flex-order: 3;\
      order: 3;\
}\
\
.quiz-image-answer input[type=radio]:checked {\
  background: #2e377b;\
  border-color: #2e377b;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-image-answer.is-selected {\
  border-color: transparent;\
}\
\
.quiz-image-answer.is-correct {\
  border-color: #1d9200;\
}\
\
.quiz-image-answer.is-correct input[type=radio] {\
  border-color: #1d9200;\
  background: #1d9200;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-image-answer.is-correct span {\
  color: #1d9200;\
}\
\
.quiz-image-answer.is-wrong {\
  border-color: #d00;\
}\
\
.quiz-image-answer.is-wrong input[type=radio] {\
  border-color: #d00;\
  background: #d00;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-image-answer.is-wrong span {\
  color: #d00;\
}\
\
.quiz-image-answer__img-wrap {\
  width: 100%;\
  overflow: hidden;\
  border-radius: 4px;\
  background: #f0f0f0;\
  -ms-flex-order: 1;\
      order: 1;\
  position: relative;\
}\
\
.quiz-image-answer__img-wrap img {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
}\
\
.quiz-image-answer > span {\
  font-size: 12px;\
  color: #333;\
  text-align: center;\
  line-height: 1.3;\
  -ms-flex-order: 2;\
      order: 2;\
}\
\
.quiz-feedback {\
  margin-top: 14px;\
}\
\
.quiz-feedback--full {\
  margin-bottom: 10px;\
}\
\
.quiz-body--feedback-img .quiz-feedback {\
  width: 397px;\
  margin-top: 0;\
  margin-bottom: 0;\
}\
\
.quiz-feedback-text {\
  font-size: 14px;\
  color: #000;\
  line-height: 1.5;\
}\
\
.quiz-feedback-keyword {\
  font-weight: 700;\
}\
\
.quiz-feedback-keyword--correct {\
  color: #1d9200;\
}\
\
.quiz-feedback-keyword--wrong {\
  color: #d00;\
}\
\
.quiz-nav {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  margin-top: auto;\
  -ms-flex-item-align: end;\
      align-self: flex-end;\
}\
\
.quiz-nav .btn-wrap__border {\
  position: absolute;\
  top: -9px;\
  left: 0;\
  right: 0;\
  height: 50px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
}\
\
.quiz-btn {\
  height: 41px;\
  border-radius: 100px;\
  border: none;\
  font-size: 13px;\
  font-weight: 700;\
  cursor: pointer;\
  text-transform: uppercase;\
  padding: 0 18px;\
  text-align: center;\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  letter-spacing: 0.02em;\
  transition: opacity 0.15s, -webkit-transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s, -webkit-transform 0.1s;\
  position: relative;\
  z-index: 1;\
}\
\
.quiz-btn:active {\
  -webkit-transform: scale(0.98);\
          transform: scale(0.98);\
}\
\
.quiz-btn--salmon {\
  background: #ee7668;\
  color: #fff;\
  width: 100%;\
}\
\
.quiz-btn--back {\
  background: #ffdc6a;\
  color: #4b54a0;\
  width: 100%;\
}\
\
.quiz-btn--next {\
  background: #ee7668;\
  color: #fff;\
  width: 397px;\
  height: 50px;\
  font-size: 16px;\
}\
\
.quiz-btn--next:disabled {\
  background: #BDBDBD;\
  cursor: not-allowed;\
  color: #000000;\
}\
\
.quiz-btn--next:disabled:active {\
  -webkit-transform: none;\
          transform: none;\
}\
\
.btn-wrap {\
  position: relative;\
  width: 100%;\
  height: 50px;\
  margin-bottom: 14px;\
}\
\
.btn-wrap .quiz-btn {\
  position: absolute;\
  top: 9px;\
  left: 0;\
  right: 0;\
  width: 100%;\
  height: 41px;\
  font-size: 13px;\
}\
\
.btn-wrap:last-of-type {\
  margin-bottom: 0;\
}\
\
.btn-wrap__border {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 41px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
  z-index: 1;\
}\
\
.quiz-screen--email {\
  -ms-flex-direction: column;\
      flex-direction: column;\
  min-height: 534px;\
}\
\
.quiz-screen--email .quiz-close,\
.quiz-screen--result .quiz-close {\
  right: 14px;\
}\
\
.email-header {\
  background: #ee7668;\
  min-height: 151px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  text-align: center;\
  padding: 24px 50px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.email-header__title {\
  font-size: 32px;\
  font-weight: 700;\
  color: #fff;\
  margin-bottom: 14px;\
  line-height: 1.2;\
}\
\
.email-header__sub {\
  font-size: 16px;\
  color: #fff;\
  max-width: 844px;\
  line-height: 1.4;\
}\
\
.email-body {\
  -ms-flex: 1;\
      flex: 1;\
  min-height: 0;\
  display: -ms-flexbox;\
  display: flex;\
  overflow: hidden;\
}\
\
.email-body__img {\
  width: 365px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
  border-radius: 0 204px 204px 0;\
  overflow: hidden;\
}\
\
.email-body__img img {\
  width: 100%;\
  height: 383px;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
}\
\
.email-body__form {\
  -ms-flex: 1;\
      flex: 1;\
  min-height: 0;\
  padding: 30px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  overflow-y: auto;\
  overflow-x: hidden;\
}\
\
.email-body__form > * {\
  width: 479px;\
}\
\
.quiz-field {\
  width: 100%;\
  height: 65px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  padding: 0 23px;\
  font-size: 16px;\
  color: #2e377b;\
  font-family: inherit;\
  outline: none;\
  background: #fff;\
  margin-bottom: 10px;\
}\
\
.quiz-field::-webkit-input-placeholder {\
  color: #2e377b;\
}\
\
.quiz-field:-ms-input-placeholder {\
  color: #2e377b;\
}\
\
.quiz-field::-ms-input-placeholder {\
  color: #2e377b;\
}\
\
.quiz-field::placeholder {\
  color: #2e377b;\
}\
\
.quiz-field:focus {\
  border-color: #1e2752;\
}\
\
.quiz-checkbox-row {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 6px;\
  margin-top: 8px;\
  font-size: 11px;\
  color: #555;\
  line-height: 1.4;\
}\
\
.quiz-checkbox-row input[type=checkbox] {\
  appearance: none;\
  -webkit-appearance: none;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 15px;\
  height: 15px;\
  min-width: 15px;\
  margin-top: 1px;\
  border-radius: 50%;\
  border: 1.5px solid #2e377b;\
  cursor: pointer;\
}\
\
.quiz-checkbox-row input[type=checkbox]:checked {\
  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 15\'%3E%3Cpath d=\'M2.5 7.5L6 11L12.5 4\' stroke=\'%232e377b\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E");\
  background-size: contain;\
  background-repeat: no-repeat;\
  background-position: center;\
}\
\
.quiz-checkbox-row label {\
  cursor: pointer;\
}\
\
.cb-link {\
  text-decoration: underline;\
}\
\
.btn-wrap--email-cta {\
  width: 100%;\
  height: 74px;\
  margin-top: 25px;\
  margin-bottom: 12px;\
}\
\
.btn-wrap--email-cta .quiz-btn {\
  background: #ee7668;\
  color: #fff;\
  font-size: 16px;\
  font-weight: 700;\
  height: 65px;\
  width: 100%;\
  text-transform: uppercase;\
}\
\
.btn-wrap--email-cta .btn-wrap__border {\
  height: 65px;\
}\
\
.quiz-skip-email {\
  font-size: 11px;\
  color: #4b54a0;\
  cursor: pointer;\
  text-decoration: underline;\
  display: block;\
  margin-top: 10px;\
}\
\
.quiz-screen--result {\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.result-header {\
  background: #ee7668;\
  height: 98px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  padding: 0 50px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.result-title {\
  font-size: 32px;\
  font-weight: 700;\
  color: #fff;\
  text-align: center;\
  line-height: 1.2;\
}\
\
.result-body {\
  padding: 30px 30px 0;\
}\
\
.result-score {\
  font-size: 12px;\
  color: #ee7668;\
  font-weight: 700;\
  text-transform: uppercase;\
  letter-spacing: 0.06em;\
  margin-bottom: 8px;\
}\
\
.result-desc {\
  font-size: 16px;\
  color: #000;\
  line-height: 1.5;\
  margin-bottom: 14px;\
}\
\
.result-tips-title {\
  font-size: 16px;\
  font-weight: 700;\
  color: #000;\
  margin-bottom: 25px;\
}\
\
.result-tips {\
  padding-left: 24px;\
  margin: 0;\
}\
\
.result-tips li {\
  font-size: 16px;\
  color: #000;\
  line-height: 1.5;\
  list-style: disc;\
  margin-bottom: 8px;\
}\
\
.result-actions {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  padding: 30px;\
  gap: 82px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.btn-wrap--result-cta {\
  width: 617px;\
  height: 74px;\
  margin-bottom: 0;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.btn-wrap--result-cta .quiz-btn {\
  background: #ee7668;\
  color: #fff;\
  font-size: 16px;\
  font-weight: 700;\
  height: 65px;\
  width: 100%;\
  text-transform: none;\
}\
\
.btn-wrap--result-cta .btn-wrap__border {\
  height: 65px;\
}\
\
.result-socials {\
  display: -ms-flexbox;\
  display: flex;\
  gap: 15px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.result-share-mob {\
  font-size: 11px;\
  color: #4b54a0;\
  text-decoration: underline;\
  text-align: center;\
}\
\
.btn-wrap--social {\
  width: 65px;\
  height: 74px;\
  margin-bottom: 0;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.btn-wrap--social .btn-wrap__border {\
  height: 65px;\
  border-radius: 50%;\
}\
\
.result-social-btn {\
  position: absolute;\
  top: 9px;\
  left: 0;\
  width: 65px;\
  height: 65px;\
  border-radius: 50%;\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.result-social-btn::before {\
  content: "";\
  width: 30px;\
  height: 30px;\
  background: center/contain no-repeat;\
}\
\
.result-social-btn--tg {\
  background: #039be5;\
}\
\
.result-social-btn--tg::before {\
  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z\'/%3E%3C/svg%3E");\
}\
\
.result-social-btn--max {\
  background: #fff;\
}\
\
.result-social-btn--max::before {\
  background-image: url("https://files.carrotquest.app/message-images/71534/71534-1781853715631-11a7kqoh.png");\
  width: 65px;\
  height: 65px;\
  border-radius: 50%;\
}\
\
.quiz-zoom-btn {\
  position: absolute;\
  bottom: 15px;\
  left: 15px;\
  width: 19px;\
  height: 19px;\
  background: #ee7668;\
  border: none;\
  border-radius: 9.5px;\
  cursor: pointer;\
  z-index: 10;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  transition: opacity 0.15s;\
}\
\
.quiz-zoom-btn:hover {\
  opacity: 0.85;\
}\
\
.quiz-zoom-btn .quiz-zoom-icon {\
  width: 19px;\
  height: 19px;\
  -o-object-fit: contain;\
     object-fit: contain;\
  display: block;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.quiz-lightbox {\
  position: fixed;\
  inset: 0;\
  z-index: 9999;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.quiz-lightbox__overlay {\
  position: absolute;\
  inset: 0;\
  background: rgba(0, 0, 0, 0.75);\
  cursor: pointer;\
}\
\
.quiz-lightbox__box {\
  position: relative;\
  z-index: 1;\
  max-width: 90vw;\
  max-height: 88vh;\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.quiz-lightbox__img {\
  display: block;\
  max-width: 100%;\
  max-height: 88vh;\
  -o-object-fit: contain;\
     object-fit: contain;\
}\
\
.quiz-lightbox__close {\
  position: absolute;\
  top: -14px;\
  right: -14px;\
  width: 28px;\
  height: 28px;\
  background: #ee7668;\
  border: none;\
  border-radius: 50%;\
  cursor: pointer;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  z-index: 2;\
}\
\
.quiz-lightbox__close::before,\
.quiz-lightbox__close::after {\
  content: "";\
  position: absolute;\
  width: 1.5px;\
  height: 13px;\
  background: #fff;\
  border-radius: 1px;\
}\
\
.quiz-lightbox__close::before {\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.quiz-lightbox__close::after {\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
}\
\
.exit-modal {\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background: rgba(0, 0, 0, 0.5);\
  z-index: 100;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.exit-modal__box {\
  background: #fff;\
  padding: 30px;\
  width: 477px;\
  max-width: 90%;\
  text-align: center;\
  position: relative;\
}\
\
.exit-modal__close::before,\
.exit-modal__close::after {\
  background: #2e377b;\
}\
\
.exit-modal__text {\
  font-size: 20px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.3;\
  margin-bottom: 16px;\
}\
\
.exit-modal__text strong {\
  font-weight: 700;\
}\
\
.exit-modal__sub {\
  font-size: 16px;\
  color: #000;\
  margin-bottom: 24px;\
}\
\
.btn-wrap--exit {\
  width: 417px;\
  max-width: 100%;\
  height: 74px;\
  margin: 0 auto;\
  margin-bottom: 0;\
}\
\
.btn-wrap--exit .quiz-btn {\
  background: #ee7668;\
  color: #fff;\
  font-size: 16px;\
  font-weight: 700;\
  height: 65px;\
  width: 100%;\
}\
\
.btn-wrap--exit .btn-wrap__border {\
  height: 65px;\
}\
\
.mob {\
  display: none !important;\
}\
\
@media (max-width: 700px) {\
  .pc {\
    display: none !important;\
  }\
\
  .mob {\
    display: block !important;\
  }\
\
  body {\
    overflow-y: auto;\
  }\
\
  .quiz-close {\
    top: 10px;\
    right: 10px;\
  }\
\
  .wrapper__body {\
    padding: 10px;\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .quiz-card {\
    max-width: 340px;\
    margin: 0 auto;\
  }\
\
  .start-btn {\
    font-size: 14px;\
  }\
\
  .quiz-screen {\
    min-height: unset;\
  }\
\
  #s1,\
  #s2,\
  #s3,\
  #s4,\
  #s5,\
  #s6,\
  #s7,\
  #s8,\
  #s9,\
  #s10 {\
    min-height: unset;\
  }\
\
  .quiz-left {\
    width: 100%;\
    height: 180px;\
    -ms-flex-order: -1;\
        order: -1;\
  }\
\
  .quiz-right {\
    padding: 18px 16px 20px;\
  }\
\
  .quiz-screen--start {\
    min-height: unset;\
  }\
\
  .start-header {\
    min-height: 108px;\
    padding: 20px;\
  }\
\
  .start-title {\
    font-size: 20px;\
  }\
\
  .start-subtitle {\
    font-size: 14px;\
    margin-top: 4px;\
  }\
\
  .start-body {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    min-height: unset;\
  }\
\
  .start-photo {\
    width: 100%;\
    height: 162px;\
    border-radius: 100px 100px 0 0;\
    -ms-flex-order: 2;\
        order: 2;\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    margin: 0 auto;\
  }\
\
  .start-content {\
    -ms-flex-order: 1;\
        order: 1;\
    padding: 20px;\
  }\
\
  .start-heading {\
    font-size: 18px;\
  }\
\
  .start-text {\
    font-size: 14px;\
  }\
\
  .quiz-header {\
    padding: 14px 36px 14px 14px;\
    min-height: unset;\
    height: auto !important;\
  }\
\
  .quiz-header-q {\
    font-size: 14px;\
    text-align: center;\
  }\
\
  #s7,\
  #s8,\
  #s9,\
  #s10 {\
    height: auto !important;\
  }\
\
  .quiz-body {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    padding: 20px;\
    gap: 0;\
  }\
\
  .quiz-body--full {\
    padding: 12px 14px;\
  }\
\
  .quiz-painting-col {\
    width: 295px;\
    height: 152px;\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    margin-bottom: 20px;\
  }\
\
  .quiz-painting-col--grid {\
    height: auto;\
    padding: 0;\
    width: 100%;\
    overflow-x: auto;\
    overflow-y: visible;\
  }\
\
  .quiz-painting-col--grid .quiz-paintings-grid {\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-wrap: nowrap;\
        flex-wrap: nowrap;\
    height: auto;\
    width: -webkit-max-content;\
    width: max-content;\
  }\
\
  .quiz-paint-cell {\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    width: 140px;\
    height: 140px;\
  }\
\
  .quiz-painting-bg {\
    padding: 0;\
  }\
\
  .quiz-answers-col {\
    padding: 0;\
    width: 100%;\
    height: auto !important;\
  }\
\
  .quiz-nav .btn-wrap__border {\
    top: -5px;\
  }\
\
  .quiz-answers {\
    gap: 7px;\
    max-height: 230px;\
    overflow-y: auto;\
    width: 100%;\
  }\
\
  .quiz-answer {\
    width: 100%;\
    height: 50px;\
    min-height: 50px;\
    font-size: 14px;\
    padding: 8px 12px;\
    gap: 10px;\
  }\
\
  .quiz-answer--wide {\
    height: auto !important;\
    min-height: 50px;\
  }\
\
  #s6 .quiz-answer {\
    height: 55px !important;\
    min-height: 55px;\
  }\
\
  #s9 .quiz-painting-col {\
    width: 295px;\
    height: 152px;\
  }\
\
  #s9 .quiz-answer {\
    height: 119px !important;\
    min-height: 119px;\
    border-radius: 30px;\
  }\
\
  #s7 .quiz-answer {\
    height: 125px !important;\
    min-height: 125px;\
    border-radius: 30px;\
  }\
\
  #s7 .quiz-answers {\
    max-height: 400px;\
  }\
\
  #s8 .quiz-answer {\
    height: 165px !important;\
    min-height: 165px;\
    border-radius: 30px;\
  }\
\
  #s8 .quiz-answers {\
    max-height: 400px;\
  }\
\
  #s10 .quiz-answers {\
    max-height: 350px;\
  }\
\
  #s10 .quiz-answer {\
    height: 154px !important;\
    min-height: 154px;\
    border-radius: 30px;\
  }\
\
  .quiz-image-answers {\
    gap: 8px;\
    -ms-flex-wrap: nowrap;\
        flex-wrap: nowrap;\
    overflow-x: auto;\
    overflow-y: visible;\
    width: 100%;\
    min-width: 0;\
    -ms-flex-pack: start;\
        justify-content: flex-start;\
  }\
\
  .quiz-image-answer {\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    width: 140px;\
    min-width: 0;\
  }\
\
  .quiz-body--feedback-img {\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .quiz-body--feedback-img .quiz-image-answers {\
    width: 100%;\
    height: 200px;\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    padding: 0;\
  }\
\
  .quiz-body--feedback-img .quiz-feedback {\
    width: 100%;\
  }\
\
  .quiz-body--feedback-img .quiz-answers-col {\
    padding: 0;\
  }\
\
  .quiz-nav {\
    width: 100%;\
    -ms-flex-item-align: stretch;\
        align-self: stretch;\
    height: 59px;\
    margin-top: 20px;\
  }\
\
  .quiz-nav .btn-wrap__border {\
    height: 50px;\
  }\
\
  .quiz-btn--next {\
    width: 100%;\
    height: 50px;\
    font-size: 12px;\
  }\
\
  .quiz-feedback-text {\
    font-size: 12px;\
  }\
\
  .quiz-lightbox__box {\
    width: 90vw;\
  }\
\
  .quiz-lightbox__img {\
    width: 100%;\
  }\
\
  .quiz-screen--email {\
    min-height: unset;\
  }\
\
  .email-header {\
    min-height: 160px;\
    padding: 16px 20px;\
  }\
\
  .email-header__title {\
    font-size: 24px;\
  }\
\
  .email-header__sub {\
    font-size: 13px;\
  }\
\
  .email-body {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    gap: 0;\
  }\
\
  .email-body__img {\
    width: 100%;\
    border-radius: 0;\
    -ms-flex-item-align: stretch;\
        align-self: stretch;\
    -ms-flex-order: 2;\
        order: 2;\
    margin-top: auto;\
  }\
\
  .email-body__img img {\
    height: auto;\
  }\
\
  .email-body__form {\
    padding: 14px;\
    -ms-flex-order: 1;\
        order: 1;\
  }\
\
  .email-body__form > * {\
    width: 100%;\
  }\
\
  .quiz-field {\
    height: 50px;\
    font-size: 14px;\
  }\
\
  .btn-wrap--email-cta {\
    width: 100%;\
    height: 59px;\
  }\
\
  .btn-wrap--email-cta .quiz-btn {\
    height: 50px;\
    font-size: 14px;\
  }\
\
  .btn-wrap--email-cta .btn-wrap__border {\
    height: 50px;\
  }\
\
  .result-header {\
    height: auto !important;\
    min-height: 70px;\
    padding: 16px 20px;\
  }\
\
  .result-title {\
    font-size: 20px;\
  }\
\
  .result-body {\
    padding: 14px 14px 0;\
  }\
\
  .result-desc,\
  .result-tips li {\
    font-size: 12px;\
  }\
\
  .result-tips-title {\
    font-size: 12px;\
    margin-bottom: 15px;\
  }\
\
  .result-actions {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    gap: 12px;\
    padding: 14px;\
  }\
\
  .btn-wrap--result-cta {\
    width: 100%;\
    height: auto;\
  }\
\
  .quiz-screen--result .btn-wrap .quiz-btn {\
    position: relative;\
    top: auto;\
    margin-top: 9px;\
    height: 50px;\
    font-size: 14px;\
  }\
\
  .quiz-screen--result .btn-wrap .quiz-btn.mob {\
    display: -ms-flexbox !important;\
    display: flex !important;\
  }\
\
  .quiz-screen--result .btn-wrap__border {\
    height: 50px;\
  }\
\
  .result-socials {\
    gap: 10px;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .exit-modal__box {\
    padding: 20px;\
  }\
\
  .exit-modal__text {\
    font-size: 16px;\
  }\
\
  .exit-modal__sub {\
    font-size: 13px;\
  }\
\
  .btn-wrap--exit {\
    width: 100%;\
  }\
}</style>\
</head>\
<body>\
<div class="cq-popup__bg js-close-bg"></div>\
<div class="wrapper__body">\
  <div class="quiz-card">\
\
    \
    <div id="s0" class="quiz-screen quiz-screen--start">\
      <div class="start-header">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="start-title">Глаз искусствоведа</p>\
        <p class="start-subtitle">10 вопросов, которые определят, знаток Вы или любитель.</p>\
      </div>\
      <div class="start-body">\
        <div class="start-photo">\
          <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781681667626-yr868nt2.png" alt="">\
          <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781781472073-irxf6v2z.png" alt="">\
        </div>\
        <div class="start-content">\
          <p class="start-heading">Тест: какой Вы искусствовед?</p>\
          <p class="start-text">Этот тест на определение «насмотренного глаза» составил искусствовед, который преподает в нашей Академии. Будет <strong>10 вопросов на 5–7 минут.</strong> После каждого ответа Вы сразу увидите, верно ответили или нет, и почему.</p>\
          <p class="start-text">В конце — <strong>Ваш результат с разбором сильных и слабых сторон,</strong> а также несколько советов: что почитать, посмотреть и куда расти дальше.</p>\
          <div class="start-btn-wrap">\
            <button class="start-btn js-start-quiz">НАЧАТЬ ТЕСТ</button>\
            <span class="start-btn-border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="exit-modal" class="exit-modal hidden">\
      <div class="exit-modal__box">\
        <a class="quiz-close exit-modal__close js-exit-cancel"></a>\
        <p class="exit-modal__text">Вы прошли уже <strong class="js-exit-progress">0</strong> вопросов из 10, точно хотите выйти?</p>\
        <p class="exit-modal__sub">Прогресс не сохранится.</p>\
        <div class="btn-wrap btn-wrap--exit">\
          <button class="quiz-btn js-exit-confirm">ВЫЙТИ</button>\
          <span class="btn-wrap__border"></span>\
        </div>\
      </div>\
    </div>\
\
    \
\
    \
    <div id="s1" class="quiz-screen hidden" data-q="1">\
      <div class="quiz-header quiz-header--has-painting">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Перед вами увеличенный фрагмент картины — обнажённое мужское тело, написанное с почти анатомической точностью, с тёмным фоном и резким контрастом светотени. Кому из мастеров принадлежит эта работа?</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col">\
          <div class="quiz-painting-bg">\
            <img class="quiz-painting-img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781764855016-gtlz5eck.png" alt="">\
        <img class="quiz-painting-img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781782061719-nu0yp9cv.png" alt="">\
            <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q1" value="0"><span>Микеланджело Буонарроти</span></label>\
            <label class="quiz-answer"><input type="radio" name="q1" value="1"><span>Каравадджо</span></label>\
            <label class="quiz-answer"><input type="radio" name="q1" value="2"><span>Питер Пауль Рубенс</span></label>\
            <label class="quiz-answer"><input type="radio" name="q1" value="3"><span>Хосе де Рибера</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (1 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s2" class="quiz-screen hidden" data-q="2">\
      <div class="quiz-header quiz-header--has-painting">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Фрагмент: кисть руки, держащая жемчужное украшение. Кожа написана прозрачными слоями, виден лёгкий голубоватый рефлекс на ногтях, фон — глубокий чёрный. Из какой национальной школы эта картина?</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col">\
          <div class="quiz-painting-bg">\
            <img class="quiz-painting-img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781764999342-vx0u6232.png" alt="">\
        <img class="quiz-painting-img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781783196498-9exgbday.png" alt="">\
            <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q2" value="0"><span>Итальянская школа XVI века</span></label>\
            <label class="quiz-answer"><input type="radio" name="q2" value="1"><span>Голландская школа XVII века</span></label>\
            <label class="quiz-answer"><input type="radio" name="q2" value="2"><span>Французская школа XVIII века</span></label>\
            <label class="quiz-answer"><input type="radio" name="q2" value="3"><span>Английская школа XIX века</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (2 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s3" class="quiz-screen hidden" data-q="3">\
      <div class="quiz-header quiz-header--full">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Перед Вами четыре изображения Мадонны с младенцем. Три из них относятся к одной эпохе, одно — к совершенно другой, и лишь имитирует более ранний стиль. Найдите лишнее.</p>\
      </div>\
      <div class="quiz-body quiz-body--full">\
        <div class="quiz-image-answers js-answers">\
          <label class="quiz-image-answer">\
            <input type="radio" name="q3" value="0">\
            <div class="quiz-image-answer__img-wrap">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781783517501-sj9iccll.png" alt="Беллини">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781783517501-sj9iccll.png" alt="Беллини">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <span></span>\
          </label>\
          <label class="quiz-image-answer">\
            <input type="radio" name="q3" value="1">\
            <div class="quiz-image-answer__img-wrap">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781765692116-8t578zwg.png" alt="Липпи">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781765692116-8t578zwg.png" alt="Липпи">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <span></span>\
          </label>\
          <label class="quiz-image-answer">\
            <input type="radio" name="q3" value="2">\
            <div class="quiz-image-answer__img-wrap">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781765734535-8zxqkh35.png" alt="Назарейец">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781765734535-8zxqkh35.png" alt="Назарейец">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <span></span>\
          </label>\
          <label class="quiz-image-answer">\
            <input type="radio" name="q3" value="3">\
            <div class="quiz-image-answer__img-wrap">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781765777947-vgh154pr.png" alt="Боттичелли">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781765777947-vgh154pr.png" alt="Боттичелли">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <span></span>\
          </label>\
        </div>\
        <div class="quiz-feedback hidden js-feedback quiz-feedback--full">\
          <div class="quiz-feedback-answer js-feedback-answer"></div>\
          <p class="quiz-feedback-text js-feedback-text"></p>\
        </div>\
        <div class="quiz-nav quiz-nav--full">\
          <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (3 ИЗ 10)</button>\
          <span class="btn-wrap__border"></span>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s4" class="quiz-screen hidden" data-q="4">\
      <div class="quiz-header quiz-header--has-painting quiz-header--small">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Расставьте четыре картины в хронологическом порядке: от самой ранней к самой поздней.</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col quiz-painting-col--grid">\
          <div class="quiz-paintings-grid">\
            <div class="quiz-paint-cell quiz-paint-cell--yellow">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781766277634-wojusgj0.png" alt="Картина А">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785009765-sfzax02c.png" alt="Картина А">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <div class="quiz-paint-cell quiz-paint-cell--coral">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781766336666-v3ruwux8.png" alt="Картина Б">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785027248-thhfmkx6.png" alt="Картина Б">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <div class="quiz-paint-cell quiz-paint-cell--coral">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781766363709-mak7vild.png" alt="Картина В">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785049663-4ge56i7g.png" alt="Картина В">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
            <div class="quiz-paint-cell quiz-paint-cell--yellow">\
              <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781766386953-objztdtd.png" alt="Картина Г">\
              <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785061904-2xt9xzqt.png" alt="Картина Г">\
              <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
            </div>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q4" value="0"><span>Рафаэль → Веласкес → Делакруа → Мане</span></label>\
            <label class="quiz-answer"><input type="radio" name="q4" value="1"><span>Рафаэль → Делакруа → Веласкес → Мане</span></label>\
            <label class="quiz-answer"><input type="radio" name="q4" value="2"><span>Веласкес → Рафаэль → Мане → Делакруа</span></label>\
            <label class="quiz-answer"><input type="radio" name="q4" value="3"><span>Рафаэль → Веласкес → Мане → Делакруа</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (4 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s5" class="quiz-screen hidden" data-q="5">\
      <div class="quiz-header quiz-header--has-painting">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">На картине молодая женщина выходит из раковины посреди моря, её несут к берегу. Слева летит крылатая фигура с надутыми щеками, справа стоит женщина с плащом. Какой это сюжет?</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col">\
          <div class="quiz-painting-bg">\
            <img class="quiz-painting-img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781767133921-iasndrso.png" alt="">\
        <img class="quiz-painting-img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781784528878-41po14jo.png" alt="">\
            <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q5" value="0"><span>Рождение Афродиты по Гесиоду</span></label>\
            <label class="quiz-answer"><input type="radio" name="q5" value="1"><span>Крещение Господне</span></label>\
            <label class="quiz-answer"><input type="radio" name="q5" value="2"><span>Триумф Галатеи</span></label>\
            <label class="quiz-answer"><input type="radio" name="q5" value="3"><span>Спасение Андромеды Персеем</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (5 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s6" class="quiz-screen hidden" data-q="6">\
      <div class="quiz-header quiz-header--has-painting">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Взгляните на картину. Что это за сюжет, и кто эта женщина в зелёном?</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col">\
          <div class="quiz-painting-bg">\
            <img class="quiz-painting-img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781767193426-jk3fmk23.png" alt="">\
        <img class="quiz-painting-img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781784778742-94m1hl8p.png" alt="">\
            <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q6" value="0"><span>Святое семейство — Мария, Иосиф и младенец Иисус</span></label>\
            <label class="quiz-answer"><input type="radio" name="q6" value="1"><span>Сретение Господне</span></label>\
            <label class="quiz-answer"><input type="radio" name="q6" value="2"><span>Мадонна с младенцем Иисусом, а пожилая женщина — это святая Анна</span></label>\
            <label class="quiz-answer"><input type="radio" name="q6" value="3"><span>Поклонение волхвов</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (6 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s7" class="quiz-screen hidden" data-q="7">\
      <div class="quiz-header quiz-header--full">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Какое из утверждений о голландском натюрморте XVII века верно?</p>\
      </div>\
      <div class="quiz-body quiz-body--full">\
        <div class="quiz-answers quiz-answers--full js-answers">\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q7" value="0"><span>Натюрморты-«vanitas» с черепами, песочными часами и потухшими свечами писались как декоративные украшения для гостиных богатых купцов</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q7" value="1"><span>Натюрморты с накрытыми столами («pronk stilleven») демонстрировали богатство заказчика и его доступ к колониальным товарам — лимонам, китайскому фарфору, серебру</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q7" value="2"><span>Цветочные натюрморты писались «с натуры», для чего художник должен был успеть запечатлеть букет до того, как цветы завянут</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q7" value="3"><span>Главным заказчиком голландского натюрморта была протестантская церковь, использовавшая его в богослужениях</span></label>\
        </div>\
        <div class="quiz-feedback hidden js-feedback quiz-feedback--full">\
          <div class="quiz-feedback-answer js-feedback-answer"></div>\
          <p class="quiz-feedback-text js-feedback-text"></p>\
        </div>\
        <div class="quiz-nav quiz-nav--full">\
          <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (7 ИЗ 10)</button>\
          <span class="btn-wrap__border"></span>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s8" class="quiz-screen hidden" data-q="8">\
      <div class="quiz-header quiz-header--full">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">В XIX веке в Российской империи произошёл «Бунт четырнадцати» — событие, ставшее переломным для русского искусства. О чём идёт речь?</p>\
      </div>\
      <div class="quiz-body quiz-body--full">\
        <div class="quiz-answers quiz-answers--full js-answers">\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q8" value="0"><span>Это бунт студентов Московского училища живописи, ваяния и зодчества против обязательного посещения занятий по церковной живописи</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q8" value="1"><span>Это отказ четырнадцати выпускников Петербургской Академии художеств писать дипломную работу на заданный академией мифологический сюжет, что привело к созданию первой независимой Артели художников</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q8" value="2"><span>Это коллективное обращение четырнадцати членов Императорской академии к Александру II с требованием отменить крепостное право для художников</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q8" value="3"><span>Это разгром выставки передвижников консервативными зрителями, обвинившими художников в «оскорблении национальных святынь»</span></label>\
        </div>\
        <div class="quiz-feedback hidden js-feedback quiz-feedback--full">\
          <div class="quiz-feedback-answer js-feedback-answer"></div>\
          <p class="quiz-feedback-text js-feedback-text"></p>\
        </div>\
        <div class="quiz-nav quiz-nav--full">\
          <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (8 ИЗ 10)</button>\
          <span class="btn-wrap__border"></span>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s9" class="quiz-screen hidden" data-q="9">\
      <div class="quiz-header quiz-header--has-painting">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">Эта картина известна тем, что на её обратной стороне написана вторая, не менее значимая работа того же автора. О какой картине идёт речь?</p>\
      </div>\
      <div class="quiz-body">\
        <div class="quiz-painting-col">\
          <div class="quiz-painting-bg">\
            <img class="quiz-painting-img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781768399538-hr98mfld.png" alt="">\
        <img class="quiz-painting-img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785418131-0nai5jqj.png" alt="">\
            <button class="quiz-zoom-btn js-zoom-btn"><img class="quiz-zoom-icon" src="https://files.carrotquest.app/message-images/71534/71534-1781676153701-nc0a7fb7.png" alt=""></button>\
          </div>\
        </div>\
        <div class="quiz-answers-col">\
          <div class="quiz-answers js-answers">\
            <label class="quiz-answer"><input type="radio" name="q9" value="0"><span>«Сад земных наслаждений» Иеронима Босха — это триптих, и на внешних створках, когда он закрыт, изображён мир в третий день творения</span></label>\
            <label class="quiz-answer"><input type="radio" name="q9" value="1"><span>«Тайная вечеря» Леонардо да Винчи — на обратной стороне стены написана композиция «Распятие» работы Монторфано</span></label>\
            <label class="quiz-answer"><input type="radio" name="q9" value="2"><span>«Менины» Веласкеса — на обратной стороне холста скрыт автопортрет художника</span></label>\
            <label class="quiz-answer"><input type="radio" name="q9" value="3"><span>«Девушка с жемчужной серёжкой» Вермеера — на обратной стороне доски есть подготовительный рисунок другой работы</span></label>\
          </div>\
          <div class="quiz-feedback hidden js-feedback">\
            <div class="quiz-feedback-answer js-feedback-answer"></div>\
            <p class="quiz-feedback-text js-feedback-text"></p>\
          </div>\
          <div class="quiz-nav">\
            <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (9 ИЗ 10)</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s10" class="quiz-screen hidden" data-q="10">\
      <div class="quiz-header quiz-header--full">\
        <a class="quiz-close js-close-btn"></a>\
        <p class="quiz-header-q">В русской иконописи существует канонический сюжет, который западному зрителю часто кажется ошибочным — он изображает Святую Троицу как трёх ангелов за столом. Откуда взялась такая иконография и кто канонически считается её главным мастером?</p>\
      </div>\
      <div class="quiz-body quiz-body--full">\
        <div class="quiz-answers quiz-answers--full js-answers">\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q10" value="0"><span>Этот сюжет восходит к описанию Троицы в Откровении Иоанна Богослова, а главный мастер — Феофан Грек</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q10" value="1"><span>Сюжет восходит к ветхозаветному эпизоду «Гостеприимства Авраама» (явление трёх странников у Мамврийского дуба), главный мастер — Андрей Рублёв с его иконой около 1411 или 1425–1427 годов</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q10" value="2"><span>Сюжет придумал лично Андрей Рублёв как самостоятельную композицию, без опоры на библейский текст</span></label>\
          <label class="quiz-answer quiz-answer--wide"><input type="radio" name="q10" value="3"><span>Этот сюжет основан на видении пророка Исайи и был развит Дионисием в XV–XVI веках</span></label>\
        </div>\
        <div class="quiz-feedback hidden js-feedback quiz-feedback--full">\
          <div class="quiz-feedback-answer js-feedback-answer"></div>\
          <p class="quiz-feedback-text js-feedback-text"></p>\
        </div>\
        <div class="quiz-nav quiz-nav--full">\
          <button class="quiz-btn quiz-btn--next js-btn-next" disabled>ДАЛЕЕ (10 ИЗ 10)</button>\
          <span class="btn-wrap__border"></span>\
        </div>\
      </div>\
    </div>\
\
    \
    <div id="s-email" class="quiz-screen quiz-screen--email hidden">\
      <a class="quiz-close js-close-btn"></a>\
      <div class="email-header">\
        <h2 class="email-header__title">Готовы узнать <br class="mob">  ваш уровень?</h2>\
        <p class="email-header__sub">Оставьте email — мы сразу покажем результат, пришлем его копию вам на почту и подберем курс под ваш уровень. Без спама, только материалы, релевантные вашему результату.</p>\
      </div>\
      <div class="email-body">\
        <div class="email-body__img">\
          <img class="pc" src="https://files.carrotquest.app/message-images/71534/71534-1781769055871-ow3olz1y.png" alt="">\
          <img class="mob" src="https://files.carrotquest.app/message-images/71534/71534-1781785866484-oj1aq6cd.png" alt="">\
        </div>\
        <div class="email-body__form">\
          <input type="text" class="quiz-field js-name-input" placeholder="Введите Ваше имя" name="name">\
          <input type="email" class="quiz-field js-email-input" placeholder="Введите Ваш эл. адрес *" name="email" required>\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb1" class="js-cb1">\
            <label for="cb1">Я даю <a href="https://agena-art.ru/politika-obrabotki-pd/" class="cb-link" target="_blank">согласие</a> на обработку своих персональных данных.</label>\
          </div>\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb2" class="js-cb2">\
            <label for="cb2">Я ознакомлен с <a href="https://agena-art.ru/privacy_policy/" target="_blank" class="cb-link">Политикой конфиденциальности.</a></label>\
          </div>\
          <div class="btn-wrap btn-wrap--email-cta">\
            <button class="quiz-btn js-submit-email">УЗНАТЬ РЕЗУЛЬТАТ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <a href="#" class="quiz-skip-email js-skip-email hidden">Посмотреть результат без e-mail →</a>\
        </div>\
      </div>\
    </div>\
\
    \
\
    \
    <div id="s-result-1" class="quiz-screen quiz-screen--result hidden">\
      <a class="quiz-close js-close-btn"></a>\
      <div class="result-header">\
        <h2 class="result-title">Вы — Турист в музее</h2>\
      </div>\
      <div class="result-body">\
        <p class="result-desc">Вы любите искусство, но пока смотрите на картины как на красивые иллюстрации. И это абсолютно нормальная стартовая точка: так же когда-то начинал почти каждый из тех, кто сегодня водит экскурсии в Эрмитаже и Третьяковке.</p>\
        <p class="result-desc">Хорошая новость в том, что и базовую «насмотренность» в искусствоведении вполне реально наработать за несколько месяцев системного обучения.</p>\
        <p class="result-tips-title">Три совета:</p>\
        <ul class="result-tips">\
          <li>Начните с обзорного курса по истории искусств, он даст вам опорную сетку эпох и стилей, на которую дальше будет ложиться все остальное.</li>\
          <li>Возьмите за правило смотреть в любом музее не больше 3–5 залов за раз, но с гайдом или аудиогидом — поверхностный пробег по 30 залам дает меньше, чем медленный вдумчивый разбор 3-5 залов.</li>\
          <li>Прочитайте «Историю искусств» Гомбриха — самую дружелюбную для новичка книгу об истории искусства, написанных за последние 70 лет.</li>\
        </ul>\
      </div>\
      <div class="result-actions">\
        <div class="btn-wrap btn-wrap--result-cta">\
          <a href="https://agena-art.ru/kursy-istoriya-iskusstv/vvedenie-v-istoriyu-iskusstv/" target="_blank" class="quiz-btn js-result-btn pc" onclick="carrotquest.clicked()">Записаться на курс «Введение в историю искусств» →</a>\
          <a href="https://agena-art.ru/kursy-istoriya-iskusstv/vvedenie-v-istoriyu-iskusstv/" target="_blank" class="quiz-btn js-result-btn mob" onclick="carrotquest.clicked()">ВВЕДЕНИЕ В ИСТОРИЮ ИСКУССТВ</a>\
          <span class="btn-wrap__border"></span>\
        </div>\
        <div class="result-socials pc">\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://t.me/agena_art" target="_blank" class="result-social-btn result-social-btn--tg js-tg-btn" title="Telegram"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://max.ru/id9731074734_bot" target="_blank" class="result-social-btn result-social-btn--max js-max-btn" title="MAX"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <a class="mob result-share-mob" href="#">Поделиться →</a>\
      </div>\
    </div>\
\
    \
    <div id="s-result-2" class="quiz-screen quiz-screen--result hidden">\
      <a class="quiz-close js-close-btn"></a>\
      <div class="result-header">\
        <h2 class="result-title">Вы — Внимательный зритель</h2>\
      </div>\
      <div class="result-body">\
        <p class="result-desc">У Вас уже есть то, что искусствоведы называют «насмотренностью». Вы узнаете крупные имена, не путаете эпохи на уровне «Возрождение или барокко», ловите знакомые сюжеты.</p>\
        <p class="result-desc">Скорее всего, Вы хорошо знаете один-два периода (любимых). Это типичная картина для человека, который много читает и ходит в музеи, но никогда не изучал историю искусств</p>\
        <p class="result-tips-title">Три совета:</p>\
        <ul class="result-tips">\
          <li>Пройдите 2–3 курса по тем периодам, которые знаете хуже всего. Лучше глубоко по одной теме, чем поверхностно по всей истории.</li>\
          <li>Начните читать классические книги по истории искусства: «Жизнеописания» Вазари, «История искусства как история духа» Дворжак, «Этюды по иконология» Панофского.</li>\
          <li>Запишитесь на экскурсию с искусствоведом-практиком — на углубленный разбор 5–7 картин за два часа. Это меняет угол зрения.</li>\
        </ul>\
      </div>\
      <div class="result-actions">\
        <div class="btn-wrap btn-wrap--result-cta">\
          <a href="https://agena-art.ru/kursy-istoriya-iskusstv/" target="_blank" class="quiz-btn js-result-btn pc" onclick="carrotquest.clicked()">Посмотреть курсы по эпохам →</a>\
          <a href="https://agena-art.ru/kursy-istoriya-iskusstv/" target="_blank" class="quiz-btn js-result-btn mob" onclick="carrotquest.clicked()">ПОСМОТРЕТЬ КУРСЫ ПО ЭПОХАМ</a>\
          <span class="btn-wrap__border"></span>\
        </div>\
        <div class="result-socials pc">\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://t.me/agena_art" target="_blank" class="result-social-btn result-social-btn--tg js-tg-btn" title="Telegram"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://max.ru/id9731074734_bot" target="_blank" class="result-social-btn result-social-btn--max js-max-btn" title="MAX"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <a class="mob result-share-mob" href="#">Поделиться →</a>\
      </div>\
    </div>\
\
    \
    <div id="s-result-3" class="quiz-screen quiz-screen--result hidden">\
      <a class="quiz-close js-close-btn"></a>\
      <div class="result-header">\
        <h2 class="result-title">Вы — Любитель с библиотекой</h2>\
      </div>\
      <div class="result-body">\
        <p class="result-desc">Вы знаете предмет глубже, чем девять из десяти посетителей музея. У Вас есть и насмотренность, и знание контекста — этот тест намеренно сделан очень сложным, и 7–8 правильных ответов из 10 говорят о серьезной подготовке.</p>\
        <p class="result-desc">Дальше вам стоит не «расширяться», а «углубляться»: брать одну тему (допустим, ювелирное искусство иконопись или нидерландскую живопись) и развиваться в ней до уровня, на котором Вы сможете отличать стили разных мастеров одной школы. Это и есть переход от любительства к экспертности.</p>\
        <p class="result-tips-title">Три совета:</p>\
        <ul class="result-tips">\
          <li>Выберите узкую специализацию по душе и пройдите по ней углубленный курс. Хороший выбор — иконография, история мебельного искусства, фальсификация в искусстве, ювелирное искусство дома Фаберже.</li>\
          <li>Начните ходить на крупные международные ярмарки и аукционы как зритель.</li>\
          <li>Подумайте, нужен ли вам формальный диплом. Если хотите перевести увлечение в профессию (экскурсовод, эксперт, галерист, арт-дилер, антиквар), без диплома о профпереподготовке двигаться сложно.</li>\
        </ul>\
      </div>\
      <div class="result-actions">\
        <div class="btn-wrap btn-wrap--result-cta">\
          <a href="https://agena-art.ru/dpo_education/" target="_blank" class="quiz-btn js-result-btn pc" onclick="carrotquest.clicked()">Выбрать углубленный курс →</a>\
          <a href="https://agena-art.ru/dpo_education/" target="_blank" class="quiz-btn js-result-btn mob" onclick="carrotquest.clicked()">ВЫБРАТЬ УГЛУБЛЕННЫЙ КУРС</a>\
          <span class="btn-wrap__border"></span>\
        </div>\
        <div class="result-socials pc">\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://t.me/agena_art" target="_blank" class="result-social-btn result-social-btn--tg js-tg-btn" title="Telegram"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://max.ru/id9731074734_bot" target="_blank" class="result-social-btn result-social-btn--max js-max-btn" title="MAX"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <a class="mob result-share-mob" href="#">Поделиться →</a>\
      </div>\
    </div>\
\
    \
    <div id="s-result-4" class="quiz-screen quiz-screen--result hidden">\
      <a class="quiz-close js-close-btn"></a>\
      <div class="result-header">\
        <h2 class="result-title">Вы — Кандидат в кураторы</h2>\
      </div>\
      <div class="result-body">\
        <p class="result-desc">Честно говоря, мы не ожидали такого результата от поп-апа на сайте. 9–10 из 10 на тесте — это уровень профессионального искусствоведа или очень серьезного коллекционера.</p>\
        <p class="result-desc">Возможно, вы из числа тех, кто работает в музее, владеет галереей или просто посвятил искусству десятилетия жизни. В этом случае обычные курсы для вас будут слишком поверхностными. В вашем случае имеет смысл говорить о программе профессиональной переподготовки с дипломом, дающей право работать искусствоведом, экспертом, арт-дилером, галеристом, антикваром или экскурсоводом официально.</p>\
        <p class="result-tips-title">Три совета:</p>\
        <ul class="result-tips">\
          <li>Рассмотрите программу ДПО «Искусствоведение» с дипломом. Это дает юридическое право вести экспертную деятельность, преподавать и работать в музеях. Часто это последний недостающий формальный элемент для людей с вашим уровнем знаний.</li>\
          <li>Подумайте о собственных публикациях (статьях, лекциях, экскурсиях). У Академии есть программы, помогающие готовить экскурсоводов и преподавателей.</li>\
          <li>Если интересуют конкретные узкие специализации (атрибуция, экспертиза, антикварный рынок, арт-менеджмент), обратите внимание на программы ДПО «Искусствоведение», «Арт-менеджмент» и «Атрибуция антиквариата» — внутри них Вы найдете насыщенную программу по всем аспектам профессии и истории искусства.</li>\
        </ul>\
      </div>\
      <div class="result-actions">\
        <div class="btn-wrap btn-wrap--result-cta">\
          <a href="https://agena-art.ru/dpo_education/" target="_blank" class="quiz-btn js-result-btn pc" onclick="carrotquest.clicked()">Подробнее о программах профпереподготовки →</a>\
          <a href="https://agena-art.ru/dpo_education/" target="_blank" class="quiz-btn js-result-btn mob" onclick="carrotquest.clicked()">ВЫБРАТЬ УГЛУБЛЕННЫЙ КУРС</a>\
          <span class="btn-wrap__border"></span>\
        </div>\
        <div class="result-socials pc">\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://t.me/agena_art" target="_blank" class="result-social-btn result-social-btn--tg js-tg-btn" title="Telegram"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--social">\
            <a href="https://max.ru/id9731074734_bot" target="_blank" class="result-social-btn result-social-btn--max js-max-btn" title="MAX"></a>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <a class="mob result-share-mob" href="#">Поделиться →</a>\
      </div>\
    </div>\
\
  </div>\
</div>\
\
<div id="quiz-lightbox" class="quiz-lightbox hidden">\
  <div class="quiz-lightbox__overlay js-lightbox-close"></div>\
  <div class="quiz-lightbox__box">\
    <img class="quiz-lightbox__img js-lightbox-img pc" src="" alt="">\
    <img class="quiz-lightbox__img js-lightbox-img mob" src="" alt="">\
    <button class="quiz-lightbox__close js-lightbox-close"></button>\
  </div>\
</div>\
\
<script>"use strict";\
\
var cqpopup_name = "Глаз искусствоведа",\
  carrotquest = {\
    track: function track(eventName, params) {\
      parent.window.carrotquest.track(eventName, params);\
    },\
    identify: function identify(props) {\
      parent.window.carrotquest.identify(props);\
    },\
    trackMessageInteraction: function trackMessageInteraction(sendingId, type) {\
      parent.window.carrotquest.trackMessageInteraction(sendingId, type);\
    },\
    animation: function animation() {\
      var data = {\
        command: "carrotquest.animationPopup",\
        "id": "{{ sending_id }}",\
        "cqpopup_name": cqpopup_name\
      };\
      top.postMessage(data, "*");\
    },\
    close: function close() {\
      var data = {\
        command: "carrotquest.closePopup",\
        "id": "{{ sending_id }}"\
      };\
      top.postMessage(data, "*");\
    },\
    replied: function replied() {\
      this.trackMessageInteraction("{{ sending_id }}", "replied");\
      this.track(\'Ответил в попап\');\
      this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);\
    },\
    clicked: function clicked() {\
      this.trackMessageInteraction("{{ sending_id }}", "clicked");\
      this.track(\'Перешел по ссылке в попапе\');\
      this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);\
    },\
    read: function read() {\
      this.trackMessageInteraction("{{ sending_id }}", "read");\
      this.track(\'Прочитал попап\');\
      this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);\
    }\
  };\
var currentQ = 0;\
var quizPhase = "question";\
var correctCount = 0;\
var QUESTIONS = [{\
  correct: 1,\
  feedbacks: ["Неверно. Хотя Микеланджело и прославился пластичностью изображения мужского тела, у него оно обычно выглядит героически, идеализированно. Здесь же мы видим грязную кожу, морщины, резкий контрастный свет, что плохо вписывается в Высокое Возрождение. <br><br> На самом деле это картина Караваджо “Распятие святого Петра” (рубеж XVI-XVII веков).", "\\u0412\\u0435\\u0440\\u043D\\u043E. \\u042D\\u0442\\u043E \\u0444\\u0440\\u0430\\u0433\\u043C\\u0435\\u043D\\u0442 \\"\\u0420\\u0430\\u0441\\u043F\\u044F\\u0442\\u0438\\u044F \\u0441\\u0432\\u044F\\u0442\\u043E\\u0433\\u043E \\u041F\\u0435\\u0442\\u0440\\u0430\\". \\u0423\\u0437\\u043D\\u0430\\u0432\\u0430\\u0435\\u043C\\u044B\\u0435 \\u043F\\u0440\\u0438\\u0437\\u043D\\u0430\\u043A\\u0438: \\u0442\\u0435\\u043D\\u0435\\u0431\\u0440\\u0438\\u0437\\u043C, \\u0434\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u043D\\u0435\\u0438\\u0434\\u0435\\u0430\\u043B\\u0438\\u0437\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E\\u0435 \\u0442\\u0435\\u043B\\u043E \\u043F\\u043E\\u0436\\u0438\\u043B\\u043E\\u0433\\u043E \\u0447\\u0435\\u043B\\u043E\\u0432\\u0435\\u043A\\u0430 \\u2028\\u0441 \\u0433\\u0440\\u044F\\u0437\\u043D\\u044B\\u043C\\u0438 \\u0441\\u0442\\u0443\\u043F\\u043D\\u044F\\u043C\\u0438, \\u043A\\u043E\\u043D\\u0442\\u0440\\u0430\\u0441\\u0442\\u043D\\u044B\\u0439 \\u0441\\u0432\\u0435\\u0442. <br><br>\\u041A\\u0430\\u0440\\u0430\\u0432\\u0430\\u0434\\u0436\\u043E \\u043E\\u0434\\u043D\\u0438\\u043C \\u0438\\u0437 \\u043F\\u0435\\u0440\\u0432\\u044B\\u0445 \\u0432 \\u0435\\u0432\\u0440\\u043E\\u043F\\u0435\\u0439\\u0441\\u043A\\u043E\\u0439 \\u0436\\u0438\\u0432\\u043E\\u043F\\u0438\\u0441\\u0438 \\u0441\\u0442\\u0430\\u043B \\u043F\\u0438\\u0441\\u0430\\u0442\\u044C \\u0441\\u0432\\u044F\\u0442\\u044B\\u0445 \\u0441 \\u043D\\u0430\\u0442\\u0443\\u0440\\u0449\\u0438\\u043A\\u043E\\u0432 \\u0438\\u0437 \\u0440\\u0438\\u043C\\u0441\\u043A\\u0438\\u0445 \\u0442\\u0440\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432, \\u0447\\u0442\\u043E \\u043F\\u043E\\u0437\\u0436\\u0435 \\u0441\\u0442\\u0430\\u043B\\u043E \\u043E\\u0431\\u0449\\u0435\\u0439 \\u043F\\u0440\\u0430\\u043A\\u0442\\u0438\\u043A\\u043E\\u0439 \\u0445\\u0443\\u0434\\u043E\\u0436\\u043D\\u0438\\u043A\\u043E\\u0432 \\u0431\\u0430\\u0440\\u043E\\u043A\\u043A\\u043E.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0420\\u0443\\u0431\\u0435\\u043D\\u0441 \\u0442\\u043E\\u0436\\u0435 \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u043B \\u043C\\u0443\\u0436\\u0441\\u043A\\u043E\\u0435 \\u0442\\u0435\\u043B\\u043E, \\u2028\\u043D\\u043E \\u0435\\u0433\\u043E \\u043F\\u0430\\u043B\\u0438\\u0442\\u0440\\u0430 \\u043F\\u0440\\u0438\\u043D\\u0446\\u0438\\u043F\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E \\u0434\\u0440\\u0443\\u0433\\u0430\\u044F: \\u0442\\u0435\\u043F\\u043B\\u044B\\u0435 \\u0440\\u043E\\u0437\\u043E\\u0432\\u043E-\\u0437\\u043E\\u043B\\u043E\\u0442\\u044B\\u0435 \\u0442\\u043E\\u043D\\u0430, \\u0440\\u0443\\u043C\\u044F\\u043D\\u0430\\u044F \\u043F\\u043B\\u043E\\u0442\\u044C, \\u043C\\u044F\\u0433\\u043A\\u0438\\u0439 \\u0440\\u0430\\u0441\\u0441\\u0435\\u044F\\u043D\\u043D\\u044B\\u0439 \\u0441\\u0432\\u0435\\u0442. \\u041A\\u043E\\u043D\\u0442\\u0440\\u0430\\u0441\\u0442 \\u0443 \\u0420\\u0443\\u0431\\u0435\\u043D\\u0441\\u0430 \\u0431\\u044B\\u0432\\u0430\\u0435\\u0442, \\u043D\\u043E \\u043E\\u043D \\u043E\\u0431\\u044B\\u0447\\u043D\\u043E \\u043D\\u0435 \\u0441\\u043E\\u0437\\u0434\\u0430\\u0435\\u0442 \\u0442\\u0430\\u043A\\u043E\\u0433\\u043E \\"\\u0442\\u0435\\u0430\\u0442\\u0440\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E\\" \\u044D\\u0444\\u0444\\u0435\\u043A\\u0442\\u0430 \\u043F\\u0440\\u043E\\u0436\\u0435\\u043A\\u0442\\u043E\\u0440\\u0430.<br><br>\\u041F\\u0435\\u0440\\u0435\\u0434 \\u043D\\u0430\\u043C\\u0438 \\u0440\\u0430\\u043D\\u043D\\u0435\\u0435 \\u0438\\u0442\\u0430\\u043B\\u044C\\u044F\\u043D\\u0441\\u043A\\u043E\\u0435 \\u0431\\u0430\\u0440\\u043E\\u043A\\u043A\\u043E, \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u041A\\u0430\\u0440\\u0430\\u0432\\u0430\\u0434\\u0436\\u043E \\u201C\\u0420\\u0430\\u0441\\u043F\\u044F\\u0442\\u0438\\u0435 \\u0441\\u0432\\u044F\\u0442\\u043E\\u0433\\u043E \\u041F\\u0435\\u0442\\u0440\\u0430\\u201D.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0420\\u0438\\u0431\\u0435\\u0440\\u0430 \\u0434\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B \\u0432 \\u043F\\u043E\\u0434\\u043E\\u0431\\u043D\\u043E\\u0439 \\u0434\\u0440\\u0430\\u043C\\u0430\\u0442\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u043C\\u0430\\u043D\\u0435\\u0440\\u0435, \\u043D\\u043E \\u0443 \\u043D\\u0435\\u0433\\u043E \\u0442\\u0435\\u043D\\u0435\\u0431\\u0440\\u0438\\u0437\\u043C \\u0435\\u0449\\u0435 \\u0431\\u043E\\u043B\\u0435\\u0435 \\u0432\\u044B\\u0440\\u0430\\u0436\\u0435\\u043D. \\u041A\\u043E\\u0436\\u0430 \\u0447\\u0430\\u0441\\u0442\\u043E \\u043E\\u0431\\u0432\\u0435\\u0442\\u0440\\u0435\\u043D\\u043D\\u0430\\u044F, \\u2028\\u0441 \\u043F\\u043E\\u0434\\u0447\\u0435\\u0440\\u043A\\u043D\\u0443\\u0442\\u043E\\u0439 \\u0444\\u0430\\u043A\\u0442\\u0443\\u0440\\u043E\\u0439. <br><br>\\u041D\\u0430 \\u0441\\u0430\\u043C\\u043E\\u043C \\u0434\\u0435\\u043B\\u0435 \\u044D\\u0442\\u043E \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u041A\\u0430\\u0440\\u0430\\u0432\\u0430\\u0434\\u0436\\u043E \\u201C\\u0420\\u0430\\u0441\\u043F\\u044F\\u0442\\u0438\\u0435 \\u0441\\u0432\\u044F\\u0442\\u043E\\u0433\\u043E \\u041F\\u0435\\u0442\\u0440\\u0430\\u201D."]\
}, {\
  correct: 1,\
  feedbacks: ["Неверно. На итальянских портретах XVI века тоже виртуозно написаны украшения, но техника совсем другая: более плотные мазки, теплый коричневатый грунт, отсутствие холодных рефлексов. И главное, итальянцы XVI века не делали такого глубокого фона.<br><br>На самом деле это “Женщина с жемчужным ожерельем” Вермеера (Голландия, XVII век).", "\\u0412\\u0435\\u0440\\u043D\\u043E. \\u042D\\u0442\\u043E \\u0433\\u043E\\u043B\\u043B\\u0430\\u043D\\u0434\\u0441\\u043A\\u0438\\u0439 \\u0437\\u043E\\u043B\\u043E\\u0442\\u043E\\u0439 \\u0432\\u0435\\u043A. \\u041D\\u0430\\u043B\\u0438\\u0446\\u043E \\u0445\\u0430\\u0440\\u0430\\u043A\\u0442\\u0435\\u0440\\u043D\\u044B\\u0435 \\u043F\\u0440\\u0438\\u0437\\u043D\\u0430\\u043A\\u0438: \\u0442\\u043E\\u043D\\u0447\\u0430\\u0439\\u0448\\u0438\\u0435 \\u043B\\u0435\\u0441\\u0441\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438, \\u043E\\u043F\\u0442\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438 \\u0442\\u043E\\u0447\\u043D\\u0430\\u044F \\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u0447\\u0430 \\u043F\\u043E\\u0432\\u0435\\u0440\\u0445\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0436\\u0435\\u043C\\u0447\\u0443\\u0433\\u0430 \\u2028\\u0441 \\u0445\\u043E\\u043B\\u043E\\u0434\\u043D\\u044B\\u043C \\u0431\\u043B\\u0438\\u043A\\u043E\\u043C, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0433\\u043B\\u0443\\u0431\\u043E\\u043A\\u043E\\u0433\\u043E \\u0444\\u043E\\u043D\\u0430. <br><br>\\u042D\\u0442\\u043E \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u201C\\u0416\\u0435\\u043D\\u0449\\u0438\\u043D\\u0430 \\u0441 \\u0436\\u0435\\u043C\\u0447\\u0443\\u0436\\u043D\\u044B\\u043C \\u043E\\u0436\\u0435\\u0440\\u0435\\u043B\\u044C\\u0435\\u043C\\u201D \\u0412\\u0435\\u0440\\u043C\\u0435\\u0435\\u0440\\u0430.", "Неверно. Французский XVIII век - это преимущественно рококо с розово-голубыми пастельными тонами, мягкой дымкой, без резких контрастов. Жемчуг и кожу там тоже писали отлично, но в принципиально иной манере, без подобной холодной точности.<br><br>На самом деле это “Женщина с жемчужным ожерельем” Вермеера, Голландия, XVII век.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0410\\u043D\\u0433\\u043B\\u0438\\u0439\\u0441\\u043A\\u0438\\u0439 XIX \\u0432\\u0435\\u043A - \\u044D\\u0442\\u043E \\u043B\\u0438\\u0431\\u043E \\u0432\\u0438\\u043A\\u0442\\u043E\\u0440\\u0438\\u0430\\u043D\\u0441\\u043A\\u0438\\u0439 \\u0430\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u0437\\u043C, \\u043B\\u0438\\u0431\\u043E \\u043F\\u0440\\u0435\\u0440\\u0430\\u0444\\u0430\\u044D\\u043B\\u0438\\u0442\\u044B \\u0441 \\u0438\\u0445 \\u044F\\u0440\\u043A\\u0438\\u043C\\u0438 \\u043D\\u0430\\u0441\\u044B\\u0449\\u0435\\u043D\\u043D\\u044B\\u043C\\u0438 \\u043A\\u0440\\u0430\\u0441\\u043A\\u0430\\u043C\\u0438 \\u0438 \\u043F\\u043B\\u043E\\u0441\\u043A\\u0438\\u043C\\u0438 \\u043A\\u043E\\u043C\\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u044F\\u043C\\u0438. \\u041D\\u0438 \\u0442\\u0435, \\u043D\\u0438 \\u0434\\u0440\\u0443\\u0433\\u0438\\u0435 \\u043D\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B\\u0438 \\u2028\\u0432 \\u043F\\u043E\\u0434\\u043E\\u0431\\u043D\\u043E\\u0439 \\u0442\\u0435\\u0445\\u043D\\u0438\\u043A\\u0435 \\u043C\\u043D\\u043E\\u0433\\u043E\\u0441\\u043B\\u043E\\u0439\\u043D\\u043E\\u0439 \\u043B\\u0435\\u0441\\u0441\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438. <br><br>\\u041D\\u0430 \\u0441\\u0430\\u043C\\u043E\\u043C \\u0434\\u0435\\u043B\\u0435 \\u044D\\u0442\\u043E \\u201C\\u0416\\u0435\\u043D\\u0449\\u0438\\u043D\\u0430 \\u0441 \\u0436\\u0435\\u043C\\u0447\\u0443\\u0436\\u043D\\u044B\\u043C \\u043E\\u0436\\u0435\\u0440\\u0435\\u043B\\u044C\\u0435\\u043C\\u201D \\u0412\\u0435\\u0440\\u043C\\u0435\\u0435\\u0440\\u0430, \\u0413\\u043E\\u043B\\u043B\\u0430\\u043D\\u0434\\u0438\\u044F, XVII \\u0432\\u0435\\u043A."]\
}, {\
  correct: 2,\
  feedbacks: ["Неверно. Это подлинная флорентийская Мадонна конца XV века (кватроченто) кисти Боттичелли. Характерные признаки: S-образная фигура, изгиб тела, светлый колорит, легкая печаль на лице. Эпоха совпадает с двумя другими подлинниками в этом ряду.", "Неверно. Это типичное венецианское кватроченто, последняя треть XV века - Джованни Беллини. Узнается по скульптурной моделировке драпировок. Подлинник эпохи.", "Верно. Это работа немецкого \\"назарейца\\" XIX века Иоганна Фридриха Овербека, который сознательно копировал черты Возрождения. <br><br>Подвох в деталях: слишком \\"прилизанная\\" манера письма, неестественно насыщенные краски, графичность, изображение ярких эмоций на лице, нетипичное для строгого кватроченто. ", "Неверно. Это флорентийская работа середины XV века авторства Филиппо Липпи - учителя Боттичелли. Здесь видны типичные черты раннего кватроченто: четкий контур, локальный цвет, еще не до конца преодоленная \\"точеность\\" позднеготической традиции."]\
}, {\
  correct: 0,\
  feedbacks: ["Верно. Это правильная последовательность: Высокое Возрождение (Рафаэль, XV-XVI век) → испанское барокко (Веласкес, XVII век) → французский романтизм (Делакруа, 30-е годы XIX века) → протомодернизм (Мане, 60-е годы XIX века). <br><br>Между Рафаэлем и Веласкесом около 140 лет, между Делакруа и Мане - всего 30, но эстетически между ними - пропасть. ", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0412\\u0435\\u043B\\u0430\\u0441\\u043A\\u0435\\u0441 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B \\u0432 XVII \\u0432\\u0435\\u043A\\u0435, \\u0430 \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 - \\u2028\\u0432 \\u043F\\u0435\\u0440\\u0432\\u043E\\u0439 \\u043F\\u043E\\u043B\\u043E\\u0432\\u0438\\u043D\\u0435 XIX. \\u041C\\u0435\\u0436\\u0434\\u0443 \\u043D\\u0438\\u043C\\u0438 \\u0431\\u043E\\u043B\\u0435\\u0435 150 \\u043B\\u0435\\u0442. <br><br>\\u041B\\u043E\\u0432\\u0443\\u0448\\u043A\\u0430 \\u0432 \\u0442\\u043E\\u043C, \\u0447\\u0442\\u043E \\u0438 \\u0412\\u0435\\u043B\\u0430\\u0441\\u043A\\u0435\\u0441, \\u0438 \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 \\u043F\\u0438\\u0441\\u0430\\u043B\\u0438 \\u2028\\u0432 \\u0434\\u0440\\u0430\\u043C\\u0430\\u0442\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u043C\\u0430\\u043D\\u0435\\u0440\\u0435 \\u0441 \\u0442\\u0435\\u043C\\u043D\\u044B\\u043C\\u0438 \\u0442\\u0435\\u043D\\u044F\\u043C\\u0438, \\u2028\\u043D\\u043E \\u0412\\u0435\\u043B\\u0430\\u0441\\u043A\\u0435\\u0441 - \\u044D\\u0442\\u043E \\u0438\\u0441\\u043F\\u0430\\u043D\\u0441\\u043A\\u043E\\u0435 \\u0431\\u0430\\u0440\\u043E\\u043A\\u043A\\u043E, \\u0430 \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 - \\u0444\\u0440\\u0430\\u043D\\u0446\\u0443\\u0437\\u0441\\u043A\\u0438\\u0439 \\u0440\\u043E\\u043C\\u0430\\u043D\\u0442\\u0438\\u0437\\u043C, \\u0438 \\u043E\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043A\\u043B\\u0430\\u0441\\u0441\\u0438\\u0446\\u0438\\u0437\\u043C\\u043E\\u043C \\u0438 \\u0440\\u043E\\u043A\\u043E\\u043A\\u043E XVIII \\u0432\\u0435\\u043A\\u0430.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0420\\u0430\\u0444\\u0430\\u044D\\u043B\\u044C (XV-XVI \\u0432\\u0435\\u043A) \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B \\u043D\\u0430\\u043C\\u043D\\u043E\\u0433\\u043E \\u0440\\u0430\\u043D\\u044C\\u0448\\u0435 \\u0412\\u0435\\u043B\\u0430\\u0441\\u043A\\u0435\\u0441\\u0430 (XVII \\u0432\\u0435\\u043A), \\u0412\\u043E\\u0437\\u0440\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0435\\u0434\\u0448\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u0431\\u0430\\u0440\\u043E\\u043A\\u043A\\u043E. \\u0418 \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 \\u0440\\u0430\\u043D\\u044C\\u0448\\u0435 \\u041C\\u0430\\u043D\\u0435, \\u2028\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u043E\\u0431\\u043E\\u0440\\u043E\\u0442. \\u0420\\u043E\\u043C\\u0430\\u043D\\u0442\\u0438\\u0437\\u043C \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 - \\u044D\\u0442\\u043E \\u043F\\u0435\\u0440\\u0432\\u0430\\u044F \\u043F\\u043E\\u043B\\u043E\\u0432\\u0438\\u043D\\u0430 XIX \\u0432\\u0435\\u043A\\u0430, \\u0430 \\u043F\\u0440\\u0435\\u0434\\u0442\\u0435\\u0447\\u0430 \\u0438\\u043C\\u043F\\u0440\\u0435\\u0441\\u0441\\u0438\\u043E\\u043D\\u0438\\u0437\\u043C\\u0430 \\u041C\\u0430\\u043D\\u0435 - \\u0432\\u0442\\u043E\\u0440\\u0430\\u044F.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u041C\\u0430\\u043D\\u0435 \\u0438 \\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0441\\u0442\\u0430\\u0432\\u043B\\u0435\\u043D\\u044B \\u043C\\u0435\\u0441\\u0442\\u0430\\u043C\\u0438. \\"\\u0421\\u0432\\u043E\\u0431\\u043E\\u0434\\u0430 \\u043D\\u0430 \\u0431\\u0430\\u0440\\u0440\\u0438\\u043A\\u0430\\u0434\\u0430\\u0445\\" \\u043D\\u0430\\u043F\\u0438\\u0441\\u0430\\u043D\\u0430 \\u0432 1830 \\u0433\\u043E\\u0434\\u0443, \\u0441\\u0440\\u0430\\u0437\\u0443 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0418\\u044E\\u043B\\u044C\\u0441\\u043A\\u043E\\u0439 \\u0440\\u0435\\u0432\\u043E\\u043B\\u044E\\u0446\\u0438\\u0438. \\"\\u0417\\u0430\\u0432\\u0442\\u0440\\u0430\\u043A \\u043D\\u0430 \\u0442\\u0440\\u0430\\u0432\\u0435\\" - \\u2028\\u0432 1863 \\u0433\\u043E\\u0434\\u0443, \\u0438 \\u0438\\u043C\\u0435\\u043D\\u043D\\u043E \\u044D\\u0442\\u0430 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u0441\\u0442\\u0430\\u043B\\u0430 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u043C \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E\\u043C \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u0438\\u0441\\u043A\\u0443\\u0441\\u0441\\u0442\\u0432\\u0430. <br><br>\\u0414\\u0435\\u043B\\u0430\\u043A\\u0440\\u0443\\u0430 - \\u0441\\u0442\\u0430\\u0440\\u0448\\u0438\\u0439 \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u0438\\u043A, \\u0430 \\u041C\\u0430\\u043D\\u0435 - \\u043D\\u0430\\u0441\\u043B\\u0435\\u0434\\u043D\\u0438\\u043A, \\u043E\\u0442\\u0432\\u0435\\u0440\\u0433\\u0448\\u0438\\u0439 \\u0440\\u043E\\u043C\\u0430\\u043D\\u0442\\u0438\\u0447\\u0435\\u0441\\u043A\\u0443\\u044E \\u0440\\u0438\\u0442\\u043E\\u0440\\u0438\\u043A\\u0443."]\
}, {\
  correct: 0,\
  feedbacks: ["Верно. Это \\"Рождение Венеры\\" Боттичелли (античный миф). Богиня появилась из морской пены, оплодотворенной кровью оскопленного Урана.<br><br>В круге Лоренцо Медичи, под влиянием флорентийского неоплатонизма, этот мотив понимали как образ божественной красоты и любви, возникающей в материальном мире и возвышающей человеческую душу.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0418\\u043A\\u043E\\u043D\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u044F \\u043A\\u0440\\u0435\\u0449\\u0435\\u043D\\u0438\\u044F \\u043F\\u0440\\u0438\\u043D\\u0446\\u0438\\u043F\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E \\u0434\\u0440\\u0443\\u0433\\u0430\\u044F: \\u0425\\u0440\\u0438\\u0441\\u0442\\u043E\\u0441 \\u0432\\u0445\\u043E\\u0434\\u0438\\u0442 \\u0432 \\u0440\\u0435\\u043A\\u0443, \\u0418\\u043E\\u0430\\u043D\\u043D \\u041A\\u0440\\u0435\\u0441\\u0442\\u0438\\u0442\\u0435\\u043B\\u044C \\u043F\\u043E\\u043B\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0435\\u0433\\u043E \\u0432\\u043E\\u0434\\u043E\\u0439, \\u0441\\u0432\\u0435\\u0440\\u0445\\u0443 \\u043D\\u0438\\u0441\\u0445\\u043E\\u0434\\u0438\\u0442 \\u0421\\u0432\\u044F\\u0442\\u043E\\u0439 \\u0414\\u0443\\u0445. <br>\\u0420\\u0430\\u043A\\u043E\\u0432\\u0438\\u043D\\u0430 \\u0432 \\u0445\\u0440\\u0438\\u0441\\u0442\\u0438\\u0430\\u043D\\u0441\\u043A\\u043E\\u0439 \\u0438\\u043A\\u043E\\u043D\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u0438 - \\u0430\\u0442\\u0440\\u0438\\u0431\\u0443\\u0442 \\u043F\\u0430\\u043B\\u043E\\u043C\\u043D\\u0438\\u043A\\u0430 \\u0438 \\u043A\\u0440\\u0435\\u0441\\u0442\\u0438\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043A\\u0443\\u043F\\u0435\\u043B\\u0438, \\u043D\\u043E \\u043D\\u0438\\u043A\\u043E\\u0433\\u0434\\u0430 \\u2028\\u043D\\u0435 \\"\\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u044C\\" \\u0434\\u043B\\u044F \\u0441\\u0430\\u043C\\u043E\\u0439 \\u0444\\u0438\\u0433\\u0443\\u0440\\u044B.<br><br>\\u0417\\u0434\\u0435\\u0441\\u044C \\u0441\\u044E\\u0436\\u0435\\u0442 \\u044F\\u0432\\u043D\\u043E \\u043C\\u0438\\u0444\\u043E\\u043B\\u043E\\u0433\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u0439, \\u044D\\u0442\\u043E \\u201C\\u0420\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u0412\\u0435\\u043D\\u0435\\u0440\\u044B\\u201D \\u0411\\u043E\\u0442\\u0442\\u0438\\u0447\\u0435\\u043B\\u043B\\u0438. ", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0413\\u0430\\u043B\\u0430\\u0442\\u0435\\u044F - \\u043D\\u0435\\u0440\\u0435\\u0438\\u0434\\u0430 (\\u043D\\u0435 \\u043F\\u0443\\u0442\\u0430\\u0442\\u044C \\u0441 \\u0413\\u0430\\u043B\\u0430\\u0442\\u0435\\u0435\\u0439 \\u2028\\u0438\\u0437 \\u043C\\u0438\\u0444\\u0430 \\u043E \\u041F\\u0438\\u0433\\u043C\\u0430\\u043B\\u0438\\u043E\\u043D\\u0435), \\u0432 \\u0436\\u0438\\u0432\\u043E\\u043F\\u0438\\u0441\\u0438 \\u043E\\u043D\\u0430 \\u043E\\u0431\\u044B\\u0447\\u043D\\u043E \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0432 \\u043A\\u043E\\u043B\\u0435\\u0441\\u043D\\u0438\\u0446\\u0435 \\u0438\\u0437 \\u0440\\u0430\\u043A\\u043E\\u0432\\u0438\\u043D\\u044B, \\u0437\\u0430\\u043F\\u0440\\u044F\\u0436\\u0435\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u043B\\u044C\\u0444\\u0438\\u043D\\u0430\\u043C\\u0438, \\u0432 \\u043E\\u043A\\u0440\\u0443\\u0436\\u0435\\u043D\\u0438\\u0438 \\u0442\\u0440\\u0438\\u0442\\u043E\\u043D\\u043E\\u0432.<br><br>\\u0417\\u0434\\u0435\\u0441\\u044C \\u0436\\u0435 - \\u043E\\u0434\\u0438\\u043D\\u043E\\u0447\\u043D\\u0430\\u044F \\u0444\\u0438\\u0433\\u0443\\u0440\\u0430, \\u0438 \\u0440\\u0430\\u043A\\u043E\\u0432\\u0438\\u043D\\u0430 \\u0432\\u044B\\u0441\\u0442\\u0443\\u043F\\u0430\\u0435\\u0442 \\u043D\\u0435 \\u0432 \\u0440\\u043E\\u043B\\u0438 \\u043A\\u043E\\u043B\\u0435\\u0441\\u043D\\u0438\\u0446\\u044B. \\u042D\\u0442\\u043E \\u0430\\u043D\\u0442\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043C\\u0438\\u0444 - \\u201C\\u0420\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u0412\\u0435\\u043D\\u0435\\u0440\\u044B\\u201D \\u0411\\u043E\\u0442\\u0442\\u0438\\u0447\\u0435\\u043B\\u043B\\u0438.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0410\\u043D\\u0434\\u0440\\u043E\\u043C\\u0435\\u0434\\u0443 \\u043F\\u043E \\u043C\\u0438\\u0444\\u0443 \\u043F\\u0440\\u0438\\u043A\\u043E\\u0432\\u044B\\u0432\\u0430\\u044E\\u0442 \\u043A \\u0441\\u043A\\u0430\\u043B\\u0435 \\u2028\\u043D\\u0430 \\u0431\\u0435\\u0440\\u0435\\u0433\\u0443 \\u043C\\u043E\\u0440\\u044F. \\u041F\\u0435\\u0440\\u0441\\u0435\\u0439 \\u043F\\u0440\\u0438\\u043B\\u0435\\u0442\\u0430\\u0435\\u0442 \\u043D\\u0430 \\u043A\\u0440\\u044B\\u043B\\u0430\\u0442\\u044B\\u0445 \\u0441\\u0430\\u043D\\u0434\\u0430\\u043B\\u0438\\u044F\\u0445 \\u0441 \\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u0439 \\u041C\\u0435\\u0434\\u0443\\u0437\\u044B \\u0413\\u043E\\u0440\\u0433\\u043E\\u043D\\u044B (\\u043F\\u043E \\u043E\\u0434\\u043D\\u043E\\u0439 \\u2028\\u0438\\u0437 \\u0432\\u0435\\u0440\\u0441\\u0438\\u0439) \\u0438 \\u0441\\u043F\\u0430\\u0441\\u0430\\u0435\\u0442 \\u0435\\u0435. \\u041E\\u0431\\u044B\\u0447\\u043D\\u043E \\u043D\\u0430 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0435 \\u0432\\u0438\\u0434\\u0438\\u043C \\u0446\\u0435\\u043F\\u0438, \\u043C\\u043E\\u0440\\u0441\\u043A\\u043E\\u0435 \\u0447\\u0443\\u0434\\u043E\\u0432\\u0438\\u0449\\u0435, \\u041F\\u0435\\u0440\\u0441\\u0435\\u044F \\u0432 \\u0433\\u0435\\u0440\\u043E\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u0435. \\u0417\\u0434\\u0435\\u0441\\u044C \\u043D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0438\\u0437 \\u044D\\u0442\\u0438\\u0445 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432. <br><br>\\u042D\\u0442\\u043E \\u201C\\u0420\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u0412\\u0435\\u043D\\u0435\\u0440\\u044B\\u201D \\u0411\\u043E\\u0442\\u0442\\u0438\\u0447\\u0435\\u043B\\u043B\\u0438. "]\
}, {\
  correct: 2,\
  feedbacks: ["Неверно. Для Святого семейства тут не хватает Иосифа, который часто изображается пожилым мужчиной с инструментами плотника или цветущим жезлом. Здесь же - женщина в зеленом. <br><br>Это “Святая Анна с Мадонной и младенцем Христом”, поздняя картина Леонардо да Винчи. ", "Неверно. Сретение - это эпизод, когда Иисуса приносят в Иерусалимский храм, и старец Симеон берет его на руки. Иконография обычно такая: храмовая колоннада, Симеон Богоприимец, Анна, иногда - голуби (для принесения жертвы). Здесь нет такого набора элементов. <br><br>Это “Святая Анна с Мадонной и младенцем Христом”, поздняя картина Леонардо да Винчи. ", "\\u0412\\u0435\\u0440\\u043D\\u043E. \\u042D\\u0442\\u043E \\u043F\\u043E\\u043F\\u0443\\u043B\\u044F\\u0440\\u043D\\u0435\\u0439\\u0448\\u0430\\u044F \\u0432 \\u0438\\u0442\\u0430\\u043B\\u044C\\u044F\\u043D\\u0441\\u043A\\u043E\\u043C \\u0420\\u0435\\u043D\\u0435\\u0441\\u0441\\u0430\\u043D\\u0441\\u0435 \\u043A\\u043E\\u043C\\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u044F, \\u201C\\u0421\\u0432\\u044F\\u0442\\u0430\\u044F \\u0410\\u043D\\u043D\\u0430 \\u0441 \\u041C\\u0430\\u0434\\u043E\\u043D\\u043D\\u043E\\u0439 \\u2028\\u0438 \\u043C\\u043B\\u0430\\u0434\\u0435\\u043D\\u0446\\u0435\\u043C \\u0425\\u0440\\u0438\\u0441\\u0442\\u043E\\u043C\\u201D, \\u043F\\u043E\\u0437\\u0434\\u043D\\u044F\\u044F \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u041B\\u0435\\u043E\\u043D\\u0430\\u0440\\u0434\\u043E \\u2028\\u0434\\u0430 \\u0412\\u0438\\u043D\\u0447\\u0438. <br><br>\\u0416\\u0435\\u043D\\u0449\\u0438\\u043D\\u0430 \\u0432 \\u0437\\u0435\\u043B\\u0435\\u043D\\u043E\\u043C - \\u044D\\u0442\\u043E \\u043C\\u0430\\u0442\\u044C \\u0411\\u043E\\u0433\\u043E\\u043C\\u0430\\u0442\\u0435\\u0440\\u0438 \\u0410\\u043D\\u043D\\u0430.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0412 \\"\\u041F\\u043E\\u043A\\u043B\\u043E\\u043D\\u0435\\u043D\\u0438\\u0438 \\u0432\\u043E\\u043B\\u0445\\u0432\\u043E\\u0432\\" \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u043F\\u0440\\u0438\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0442 \\u0442\\u0440\\u0438 \\u0446\\u0430\\u0440\\u044F \\u0441 \\u0434\\u0430\\u0440\\u0430\\u043C\\u0438 (\\u0437\\u043E\\u043B\\u043E\\u0442\\u043E, \\u043B\\u0430\\u0434\\u0430\\u043D, \\u0441\\u043C\\u0438\\u0440\\u043D\\u0430), \\u0447\\u0430\\u0441\\u0442\\u043E \\u0432\\u0435\\u0440\\u0431\\u043B\\u044E\\u0434\\u044B \\u0438\\u043B\\u0438 \\u043B\\u043E\\u0448\\u0430\\u0434\\u0438, \\u0437\\u0432\\u0435\\u0437\\u0434\\u0430 \\u2028\\u043D\\u0430\\u0434 \\u044F\\u0441\\u043B\\u044F\\u043C\\u0438, \\u0438\\u043D\\u043E\\u0433\\u0434\\u0430 \\u0432\\u043E\\u043B \\u0438 \\u043E\\u0441\\u0435\\u043B. \\u042D\\u0442\\u043E \\u043C\\u043D\\u043E\\u0433\\u043E\\u0444\\u0438\\u0433\\u0443\\u0440\\u043D\\u0430\\u044F \\u0441\\u043B\\u043E\\u0436\\u043D\\u0430\\u044F \\u043A\\u043E\\u043C\\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u044F, \\u0430 \\u043D\\u0435 \\u0441\\u0446\\u0435\\u043D\\u0430 \\u0441 \\u0434\\u0432\\u0443\\u043C\\u044F \\u0436\\u0435\\u043D\\u0449\\u0438\\u043D\\u0430\\u043C\\u0438 \\u0438 \\u043C\\u043B\\u0430\\u0434\\u0435\\u043D\\u0446\\u0435\\u043C. <br><br>\\u042D\\u0442\\u043E \\u201C\\u0421\\u0432\\u044F\\u0442\\u0430\\u044F \\u0410\\u043D\\u043D\\u0430 \\u0441 \\u041C\\u0430\\u0434\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0438 \\u043C\\u043B\\u0430\\u0434\\u0435\\u043D\\u0446\\u0435\\u043C \\u0425\\u0440\\u0438\\u0441\\u0442\\u043E\\u043C\\u201D, \\u043F\\u043E\\u0437\\u0434\\u043D\\u044F\\u044F \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u0430 \\u041B\\u0435\\u043E\\u043D\\u0430\\u0440\\u0434\\u043E \\u0434\\u0430 \\u0412\\u0438\\u043D\\u0447\\u0438."]\
}, {\
  correct: 1,\
  feedbacks: ["Неверно. \\"Vanitas\\" (от лат. \\"суета\\") - это морализаторский жанр, напоминание о бренности жизни. Такие натюрморты вешали в кабинете или библиотеке, а не для украшения парадных гостиных. <br><br>Верным было утверждение о том, что pronk stilleven (\\"роскошные натюрморты\\") демонстрировали богатство заказчика и его доступ к колониальным товарам.", "Верно. \\"Pronk\\" в переводе с голландского значит \\"роскошь\\". Этот тип натюрморта расцвел в Голландии XVII века.<br><br>Очищенный лимон, китайский фарфор династии Мин, серебряный сосуд, персидский ковер -  каждый предмет был свидетельством высокого социального статуса заказчика. Это типичная ярмарка тщеславия. ", "Неверно. Цветочные натюрморты - это почти всегда обобщенные образы, а не зарисовки с натуры. Художники часто собирали в одном букете цветы, которые цветут в разные сезоны.<br><br>Верным было утверждение о том, что pronk stilleven (\\"роскошные натюрморты\\") демонстрировали богатство заказчика и его доступ к колониальным товарам.", "Неверно. Протестантская реформация изгнала живопись из храмов, и это вынудило голландских художников искать светских заказчиков: так начался расцвет жанровой живописи и портретов. <br><br>Верным было утверждение о том, что pronk stilleven (\\"роскошные натюрморты\\") демонстрировали богатство заказчика и его доступ к колониальным товарам."]\
}, {\
  correct: 1,\
  feedbacks: ["Неверно. В Москве такого не было.<br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \\"Пир в Валгалле\\". Позже они образовали Товарищество передвижников.", "\\u0412\\u0435\\u0440\\u043D\\u043E. \\u0412 1863 \\u0433\\u043E\\u0434\\u0443 \\u0447\\u0435\\u0442\\u044B\\u0440\\u043D\\u0430\\u0434\\u0446\\u0430\\u0442\\u044C \\u0432\\u044B\\u043F\\u0443\\u0441\\u043A\\u043D\\u0438\\u043A\\u043E\\u0432 \\u0418\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u043E\\u0440\\u0441\\u043A\\u043E\\u0439 \\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u0438 \\u0445\\u0443\\u0434\\u043E\\u0436\\u0435\\u0441\\u0442\\u0432 \\u0432\\u043E \\u0433\\u043B\\u0430\\u0432\\u0435 \\u0441 \\u0418\\u0432\\u0430\\u043D\\u043E\\u043C \\u041A\\u0440\\u0430\\u043C\\u0441\\u043A\\u0438\\u043C \\u043E\\u0442\\u043A\\u0430\\u0437\\u0430\\u043B\\u0438\\u0441\\u044C \\u043F\\u0438\\u0441\\u0430\\u0442\\u044C \\u0434\\u0438\\u043F\\u043B\\u043E\\u043C\\u043D\\u0443\\u044E \\u0440\\u0430\\u0431\\u043E\\u0442\\u0443 \\u043D\\u0430 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439 \\u043C\\u0438\\u0444\\u043E\\u043B\\u043E\\u0433\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u0439 \\u0441\\u044E\\u0436\\u0435\\u0442 \\"\\u041F\\u0438\\u0440 \\u0432 \\u0412\\u0430\\u043B\\u0433\\u0430\\u043B\\u043B\\u0435\\".<br><br>\\u041E\\u043D\\u0438 \\u043F\\u043E\\u0442\\u0440\\u0435\\u0431\\u043E\\u0432\\u0430\\u043B\\u0438 \\u0441\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0432\\u044B\\u0431\\u043E\\u0440\\u0430 \\u0442\\u0435\\u043C\\u044B \\u0438, \\u043D\\u0435 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0438\\u0432 \\u0440\\u0430\\u0437\\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u044F, \\u0434\\u0435\\u043C\\u043E\\u043D\\u0441\\u0442\\u0440\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u043F\\u043E\\u043A\\u0438\\u043D\\u0443\\u043B\\u0438 \\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044E \\u2028\\u0431\\u0435\\u0437 \\u0434\\u0438\\u043F\\u043B\\u043E\\u043C\\u043E\\u0432. ", "Неверно. Реальный бунт был не социальным, а эстетическим, за свободу выбора темы. <br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \\"Пир в Валгалле\\". Позже они образовали Товарищество передвижников.  ", "Неверно. Хотя передвижники часто подвергались критике, такого погрома не было.<br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \\"Пир в Валгалле\\". Позже они образовали Товарищество передвижников."]\
}, {\
  correct: 0,\
  feedbacks: ["Верно. \\"Сад земных наслаждений\\" Иеронима Босха - один из самых известных триптихов европейской живописи. В закрытом виде на внешних створках мы видим монохромное изображение Земли в момент творения (вода, скалы и первые растения, без людей и животных). ", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u041D\\u0430 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043E\\u043F\\u043E\\u043B\\u043E\\u0436\\u043D\\u043E\\u0439 \\u0441\\u0442\\u0435\\u043D\\u0435 \\u0432 \\u0442\\u0440\\u0430\\u043F\\u0435\\u0437\\u043D\\u043E\\u0439 \\u043C\\u043E\\u043D\\u0430\\u0441\\u0442\\u044B\\u0440\\u044F \\u0421\\u0430\\u043D\\u0442\\u0430-\\u041C\\u0430\\u0440\\u0438\\u044F-\\u0434\\u0435\\u043B\\u043B\\u0435-\\u0413\\u0440\\u0430\\u0446\\u0438\\u0435 \\u0434\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0435\\u0441\\u0442\\u044C \\"\\u0420\\u0430\\u0441\\u043F\\u044F\\u0442\\u0438\\u0435\\" \\u041C\\u043E\\u043D\\u0442\\u043E\\u0440\\u0444\\u0430\\u043D\\u043E, \\u043D\\u043E \\u044D\\u0442\\u043E \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430 \\u0434\\u0440\\u0443\\u0433\\u043E\\u0433\\u043E \\u0430\\u0432\\u0442\\u043E\\u0440\\u0430, \\u0430 \\u043F\\u043E\\u0440\\u0442\\u0440\\u0435\\u0442\\u044B \\u043A\\u0438\\u0441\\u0442\\u0438 \\u041B\\u0435\\u043E\\u043D\\u0430\\u0440\\u0434\\u043E \\u2028\\u043D\\u0435 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u043B\\u0438\\u0441\\u044C.<br><br>\\u0410 \\u043C\\u044B \\u0438\\u043C\\u0435\\u043B\\u0438 \\u0432 \\u0432\\u0438\\u0434\\u0443 \\u201C\\u0421\\u0430\\u0434 \\u0437\\u0435\\u043C\\u043D\\u044B\\u0445 \\u043D\\u0430\\u0441\\u043B\\u0430\\u0436\\u0434\\u0435\\u043D\\u0438\\u0439\\u201D \\u0411\\u043E\\u0441\\u0445\\u0430, \\u043D\\u0430 \\u0432\\u043D\\u0435\\u0448\\u043D\\u0438\\u0445 \\u0441\\u0442\\u0432\\u043E\\u0440\\u043A\\u0430\\u0445 \\u043A\\u043E\\u0442\\u043E\\u0440\\u043E\\u0433\\u043E \\u0435\\u0441\\u0442\\u044C \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u0417\\u0435\\u043C\\u043B\\u0438 \\u0432 \\u043C\\u043E\\u043C\\u0435\\u043D\\u0442 \\u0442\\u0432\\u043E\\u0440\\u0435\\u043D\\u0438\\u044F \\u0435\\u0433\\u043E \\u0436\\u0435 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0441\\u0442\\u0432\\u0430.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u041D\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0442\\u043D\\u043E\\u0439 \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u0435 \\"\\u041C\\u0435\\u043D\\u0438\\u043D\\" \\u043D\\u0438\\u043A\\u0430\\u043A\\u0438\\u0445 \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0439 \\u043D\\u0435\\u0442. \\u041E\\u0431\\u0440\\u0430\\u0437 \\u0412\\u0435\\u043B\\u0430\\u0441\\u043A\\u0435\\u0441\\u0430 \\u0438 \\u0442\\u0430\\u043A \\u043F\\u0440\\u0438\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u043D\\u0430 \\u043B\\u0438\\u0446\\u0435\\u0432\\u043E\\u0439 \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u0435 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u044B, \\u2028\\u0443 \\u043C\\u043E\\u043B\\u044C\\u0431\\u0435\\u0440\\u0442\\u0430. <br><br>\\u0410 \\u043C\\u044B \\u0438\\u043C\\u0435\\u043B\\u0438 \\u0432 \\u0432\\u0438\\u0434\\u0443 \\u201C\\u0421\\u0430\\u0434 \\u0437\\u0435\\u043C\\u043D\\u044B\\u0445 \\u043D\\u0430\\u0441\\u043B\\u0430\\u0436\\u0434\\u0435\\u043D\\u0438\\u0439\\u201D \\u0411\\u043E\\u0441\\u0445\\u0430, \\u043D\\u0430 \\u0432\\u043D\\u0435\\u0448\\u043D\\u0438\\u0445 \\u0441\\u0442\\u0432\\u043E\\u0440\\u043A\\u0430\\u0445 \\u043A\\u043E\\u0442\\u043E\\u0440\\u043E\\u0433\\u043E \\u0435\\u0441\\u0442\\u044C \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u0417\\u0435\\u043C\\u043B\\u0438 \\u0432 \\u043C\\u043E\\u043C\\u0435\\u043D\\u0442 \\u0442\\u0432\\u043E\\u0440\\u0435\\u043D\\u0438\\u044F \\u0435\\u0433\\u043E \\u0436\\u0435 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0441\\u0442\\u0432\\u0430.", "\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E. \\u0420\\u0435\\u0441\\u0442\\u0430\\u0432\\u0440\\u0430\\u0442\\u043E\\u0440\\u044B \\u043F\\u0440\\u043E\\u0432\\u0435\\u043B\\u0438 \\u043C\\u043D\\u043E\\u0433\\u043E \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0439 \\u0440\\u0430\\u0437\\u043B\\u0438\\u0447\\u043D\\u044B\\u0445 \\u043F\\u043E\\u043B\\u043E\\u0442\\u0435\\u043D \\u0412\\u0435\\u0440\\u043C\\u0435\\u0435\\u0440\\u0430. \\u041D\\u043E \\u043D\\u0430 \\"\\u0414\\u0435\\u0432\\u0443\\u0448\\u043A\\u0435 \\u2028\\u0441 \\u0436\\u0435\\u043C\\u0447\\u0443\\u0436\\u043D\\u043E\\u0439 \\u0441\\u0435\\u0440\\u0435\\u0436\\u043A\\u043E\\u0439\\" \\u0432\\u0442\\u043E\\u0440\\u043E\\u0439 \\u043A\\u043E\\u043C\\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0431\\u043D\\u0430\\u0440\\u0443\\u0436\\u0435\\u043D\\u043E \\u043D\\u0435 \\u0431\\u044B\\u043B\\u043E. <br><br>\\u0410 \\u043C\\u044B \\u0438\\u043C\\u0435\\u043B\\u0438 \\u0432 \\u0432\\u0438\\u0434\\u0443 \\u201C\\u0421\\u0430\\u0434 \\u0437\\u0435\\u043C\\u043D\\u044B\\u0445 \\u043D\\u0430\\u0441\\u043B\\u0430\\u0436\\u0434\\u0435\\u043D\\u0438\\u0439\\u201D \\u0411\\u043E\\u0441\\u0445\\u0430, \\u043D\\u0430 \\u0432\\u043D\\u0435\\u0448\\u043D\\u0438\\u0445 \\u0441\\u0442\\u0432\\u043E\\u0440\\u043A\\u0430\\u0445 \\u043A\\u043E\\u0442\\u043E\\u0440\\u043E\\u0433\\u043E \\u0435\\u0441\\u0442\\u044C \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u0417\\u0435\\u043C\\u043B\\u0438 \\u0432 \\u043C\\u043E\\u043C\\u0435\\u043D\\u0442 \\u0442\\u0432\\u043E\\u0440\\u0435\\u043D\\u0438\\u044F \\u0435\\u0433\\u043E \\u0436\\u0435 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0441\\u0442\\u0432\\u0430."]\
}, {\
  correct: 1,\
  feedbacks: ["Неверно. Откровение Иоанна Богослова описывает Бога на престоле.<br><br>На самом деле Андрей Рублев взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.", "Верно. Сюжет ветхозаветный, из 18 главы Книги Бытия: к Аврааму у Мамврийского дуба пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.", "Неверно. Рублев ничего не придумывал. <br><br>На самом деле он взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.", "Неверно. Видение Исайи - это совсем другой иконографический сюжет.<br><br>На самом деле Андрей Рублев взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и все бытовые детали, оставив только трех ангелов вокруг чаши."]\
}];\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    setTgLink(\'https://t.me/agena_art_manager_bot\');\
  }\
});\
function setTgLink(link) {\
  var tgLink = link;\
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=".concat(top.carrotquest.data.user.user_signature.telegram) : \'\';\
  document.querySelectorAll(\'.js-tg-btn\').forEach(function (btn) {\
    btn.href = tgLink;\
  });\
}\
function showScreen(id) {\
  document.querySelectorAll(".quiz-screen").forEach(function (s) {\
    s.classList.add("hidden");\
  });\
  var target = document.getElementById(id);\
  if (target) target.classList.remove("hidden");\
}\
document.addEventListener("click", function (e) {\
  var isBg = e.target.classList.contains("js-close-bg");\
  var isClose = e.target.closest && e.target.closest(".js-close-btn");\
  if (!isBg && !isClose) return;\
  if (currentQ >= 1 && currentQ <= 10) {\
    var modal = document.getElementById("exit-modal");\
    modal.querySelector(".js-exit-progress").textContent = currentQ;\
    modal.classList.remove("hidden");\
  } else {\
    carrotquest.close();\
  }\
});\
document.querySelector(".js-exit-confirm").addEventListener("click", function () {\
  carrotquest.close();\
});\
document.querySelector(".js-exit-cancel").addEventListener("click", function () {\
  document.getElementById("exit-modal").classList.add("hidden");\
});\
document.querySelector(".js-start-quiz").addEventListener("click", function () {\
  carrotquest.track(cqpopup_name + " - Нажал ПРОЙТИ ТЕСТ");\
  currentQ = 1;\
  quizPhase = "question";\
  showScreen("s1");\
});\
document.addEventListener("click", function (e) {\
  var answerEl = e.target.closest(".quiz-answer, .quiz-image-answer");\
  if (!answerEl) return;\
  var screen = answerEl.closest(".quiz-screen");\
  if (!screen || screen.classList.contains("hidden")) return;\
  if (quizPhase === "feedback") return;\
  screen.querySelectorAll(".quiz-answer, .quiz-image-answer").forEach(function (a) {\
    a.classList.remove("is-selected");\
  });\
  answerEl.classList.add("is-selected");\
  var nextBtn = screen.querySelector(".js-btn-next");\
  if (nextBtn) nextBtn.disabled = false;\
});\
document.addEventListener("click", function (e) {\
  var btn = e.target.closest(".js-btn-next");\
  if (!btn || btn.disabled) return;\
  var screen = btn.closest(".quiz-screen");\
  if (quizPhase === "question") {\
    var checked = screen.querySelector("input[type=\'radio\']:checked");\
    if (!checked) return;\
    var selectedIndex = parseInt(checked.value, 10);\
    var qData = QUESTIONS[currentQ - 1];\
    var isCorrect = selectedIndex === qData.correct;\
    if (isCorrect) correctCount++;\
    screen.querySelectorAll(".quiz-answer, .quiz-image-answer").forEach(function (a) {\
      var radio = a.querySelector("input[type=\'radio\']");\
      if (!radio) return;\
      var val = parseInt(radio.value, 10);\
      if (val === qData.correct) {\
        a.classList.add("is-correct");\
      } else if (val === selectedIndex && !isCorrect) {\
        a.classList.add("is-wrong");\
      }\
      if (!a.classList.contains("is-selected")) {\
        a.classList.add("hidden");\
      }\
    });\
    var imageAnswersEl = screen.querySelector(".quiz-image-answers");\
    if (imageAnswersEl) {\
      var bodyEl = imageAnswersEl.closest(".quiz-body--full");\
      if (bodyEl) {\
        var selectedAnswer = screen.querySelector(".quiz-image-answer.is-selected");\
        var imgWrapToPin = selectedAnswer ? selectedAnswer.querySelector(".quiz-image-answer__img-wrap") : null;\
        var pinnedRect = imgWrapToPin ? imgWrapToPin.getBoundingClientRect() : null;\
        bodyEl.classList.add("quiz-body--feedback-img");\
        if (imgWrapToPin && pinnedRect) {\
          imgWrapToPin.style.width = pinnedRect.width + "px";\
          imgWrapToPin.style.height = pinnedRect.height + "px";\
          imgWrapToPin.style.aspectRatio = "auto";\
          imgWrapToPin.style.flex = "none";\
        }\
        var feedbackNode = screen.querySelector(".js-feedback");\
        var navNode = screen.querySelector(".quiz-nav");\
        var rightCol = document.createElement("div");\
        rightCol.className = "quiz-answers-col";\
        feedbackNode.parentNode.insertBefore(rightCol, feedbackNode);\
        rightCol.appendChild(feedbackNode);\
        rightCol.appendChild(navNode);\
      }\
    }\
    var selectedInput = screen.querySelector("input[value=\'" + selectedIndex + "\']");\
    var answerText = "";\
    if (selectedInput) {\
      var next = selectedInput.nextElementSibling;\
      if (next && next.classList.contains("quiz-image-answer__img-wrap")) {\
        next = next.nextElementSibling;\
      }\
      answerText = next ? next.textContent.trim() : "";\
    }\
    var feedbackEl = screen.querySelector(".js-feedback");\
    var fbAnswerEl = screen.querySelector(".js-feedback-answer");\
    var fbTextEl = screen.querySelector(".js-feedback-text");\
    fbAnswerEl.classList.add("hidden");\
    carrotquest.track(cqpopup_name + " - Ответил на вопрос " + currentQ, {\
      "Номер вопроса": currentQ,\
      "Ответ": answerText,\
      "Результат": isCorrect ? "Верно" : "Неверно"\
    });\
    carrotquest.identify([{\
      op: "update_or_create",\
      key: cqpopup_name + " - Вопрос " + currentQ,\
      value: answerText\
    }]);\
    var feedbackText = qData.feedbacks[selectedIndex];\
    var firstSpace = feedbackText.indexOf(\' \');\
    var firstWord = firstSpace > -1 ? feedbackText.substring(0, firstSpace) : feedbackText;\
    var rest = firstSpace > -1 ? feedbackText.substring(firstSpace) : \'\';\
    var kwClass = \'quiz-feedback-keyword \' + (isCorrect ? \'quiz-feedback-keyword--correct\' : \'quiz-feedback-keyword--wrong\');\
    fbTextEl.innerHTML = \'<span class="\' + kwClass + \'">\' + firstWord + \'</span>\' + rest;\
    feedbackEl.classList.remove("hidden");\
    screen.querySelectorAll("input[type=\'radio\']").forEach(function (r) {\
      r.disabled = true;\
    });\
    if (currentQ === 10) {\
      btn.textContent = "УЗНАТЬ РЕЗУЛЬТАТ";\
    }\
    quizPhase = "feedback";\
  } else {\
    if (currentQ < 10) {\
      currentQ++;\
      quizPhase = "question";\
      showScreen("s" + currentQ);\
    } else {\
      currentQ = 0;\
      quizPhase = "question";\
      carrotquest.identify([{\
        op: "update_or_create",\
        key: cqpopup_name + " - Правильных ответов",\
        value: correctCount\
      }]);\
      showScreen("s-email");\
    }\
  }\
});\
document.querySelector(".js-submit-email").addEventListener("click", function () {\
  var emailInput = document.querySelector(".js-email-input");\
  var email = emailInput.value.trim();\
  var cb1 = document.getElementById("cb1");\
  var cb2 = document.getElementById("cb2");\
  if (!email) {\
    emailInput.style.borderColor = "#e33";\
    return;\
  }\
  emailInput.style.borderColor = "";\
  if (!cb1.checked || !cb2.checked) {\
    if (!cb1.checked) cb1.style.outline = "1.5px solid #e33";\
    if (!cb2.checked) cb2.style.outline = "1.5px solid #e33";\
    return;\
  }\
  cb1.style.outline = "";\
  cb2.style.outline = "";\
  var nameInput = document.querySelector(".js-name-input");\
  var name = nameInput ? nameInput.value.trim() : "";\
  carrotquest.replied();\
  var identifyProps = [{\
    op: "update_or_create",\
    key: "$email",\
    value: email\
  }, {\
    op: "update_or_create",\
    key: cqpopup_name + " - Правильных ответов",\
    value: correctCount\
  }];\
  if (name) {\
    identifyProps.push({\
      op: "update_or_create",\
      key: "$name",\
      value: name\
    });\
  }\
  carrotquest.identify(identifyProps);\
  carrotquest.track(cqpopup_name + " - Отправил email");\
  showResult();\
});\
document.querySelector(".js-skip-email").addEventListener("click", function (e) {\
  e.preventDefault();\
  carrotquest.track(cqpopup_name + " - Пропустил email");\
  showResult();\
});\
function showResult() {\
  var resultId;\
  var segment;\
  if (correctCount <= 3) {\
    resultId = "s-result-1";\
    segment = "tourist";\
  } else if (correctCount <= 6) {\
    resultId = "s-result-2";\
    segment = "viewer";\
  } else if (correctCount <= 8) {\
    resultId = "s-result-3";\
    segment = "amateur";\
  } else {\
    resultId = "s-result-4";\
    segment = "curator";\
  }\
  var scoreText = "Вы ответили верно на " + correctCount + " из 10 вопросов";\
  document.querySelectorAll(".js-score-text").forEach(function (el) {\
    el.textContent = scoreText;\
  });\
  var timestamp = new Date().toISOString();\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: cqpopup_name + " - Сегмент",\
    value: segment\
  }]);\
  carrotquest.track(cqpopup_name + " - Завершил квиз", {\
    "Правильных ответов": correctCount,\
    "Сегмент": segment,\
    "Timestamp": timestamp\
  });\
  showScreen(resultId);\
}\
document.addEventListener("click", function (e) {\
  if (e.target.closest(".js-tg-btn")) {\
    carrotquest.track(cqpopup_name + " - Перешел в Telegram");\
  }\
  if (e.target.closest(".js-max-btn")) {\
    carrotquest.track(cqpopup_name + " - Перешел в MAX");\
  }\
});\
document.addEventListener("click", function (e) {\
  var btn = e.target.closest(".js-zoom-btn");\
  if (!btn) return;\
  e.stopPropagation();\
  var container = btn.closest(".quiz-painting-bg, .quiz-paint-cell, .quiz-image-answer__img-wrap");\
  var imgs = container ? container.querySelectorAll("img:not(.quiz-zoom-icon)") : null;\
  var img = null;\
  if (imgs) {\
    for (var i = 0; i < imgs.length; i++) {\
      if (getComputedStyle(imgs[i]).display !== "none") {\
        img = imgs[i];\
        break;\
      }\
    }\
  }\
  if (!img) return;\
  document.querySelectorAll(".js-lightbox-img").forEach(function (el) {\
    el.src = img.src;\
  });\
  document.getElementById("quiz-lightbox").classList.remove("hidden");\
});\
document.addEventListener("click", function (e) {\
  if (e.target.closest(".js-lightbox-close")) {\
    document.getElementById("quiz-lightbox").classList.add("hidden");\
  }\
});</script>\
</body>\
</html>\
\
';

"use strict";

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.transition = '.5s';
iframe.style.top = '0';
iframe.style.right = '0';
iframe.style.left = '0';
iframe.style.bottom = '0';
document.body.appendChild(iframe);
var iframeContent = iframe.contentWindow || iframe.contentDocument;
if (iframeContent.document) iframeContent = iframeContent.document;
iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();
carrotquest.identify([{
  op: 'update_or_create',
  key: 'popup',
  value: 'opened'
}]);
localStorage["cq_popup"] = 'opened';