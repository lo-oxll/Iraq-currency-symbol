if ("fonts" in document) {
  document.fonts.load('16px "GoldDinarCurrency"').then(function (loaded) {
    var status = document.getElementById("status");
    if (loaded && loaded.length > 0) {
      document.documentElement.classList.add("currency-font-ready");
      status.textContent = "✅ الخط انحمّل بنجاح — الرمز ثابت الآن، بدون أي تبديل";
      status.style.color = "green";
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
