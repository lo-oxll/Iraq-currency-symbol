if ("fonts" in document) {
  document.fonts.load('16px "GoldDinarCurrency"').then(function (loaded) {
    var status = document.getElementById("status");
    if (loaded && loaded.length > 0) {
      document.documentElement.classList.add("currency-font-ready");
      document.documentElement.classList.add("currency-show-text"); // يبدأ بعرض النص
      status.textContent = "✅ الخط انحمّل بنجاح — د.ع لمدة 5 ثوانٍ ثم الرمز لمدة ثانية، ويتكرر";
      status.style.color = "green";
      (function cycle(){
        setTimeout(function () {
          document.documentElement.classList.remove("currency-show-text");
          setTimeout(function () {
            document.documentElement.classList.add("currency-show-text");
            cycle();
          }, 1000);
        }, 5000);
      })();
    } else {
      status.textContent = "⚠️ لم يتم العثور على الخط — يظهر النص الاحتياطي د.ع";
      status.style.color = "orange";
    }
  }).catch(function () {
    var status = document.getElementById("status");
    status.textContent = "❌ فشل تحميل الخط — يظهر النص الاحتياطي د.ع";
    status.style.color = "red";
  });
}
