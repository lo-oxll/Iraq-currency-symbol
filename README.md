# رمز الدينار العراقي · Iraqi Dinar Symbol

مجاني ومفتوح (CC0) للجميع. الصفحة: https://lo-oxll.github.io/Iraq-currency-symbol/downloads.html

## الملفات (كلها في مستوى واحد بدون مجلدات)
- `IraqDinarSymbol.ttf` و `.woff` — الخط، الرمز على الشيفرة U+E900
- `iraq-dinar-symbol-*.svg` و `.png` — أسود، أبيض، كحلي، ذهبي
- `IraqDinarDigits-Regular/Bold.ttf` و `.woff` — خط الأرقام المصممة (0-9 و٠-٩) + الرمز
- `IraqKufic-Regular.ttf` و `.woff` — الحروف العربية بطابع الكوفي القديم (نسخة أولى)
- `iraq-dinar.css` — ملف CSS الجاهز
- `iraq-dinar-symbol.php` — إضافة ووكومرس
- `downloads.html` — صفحة التحميل · `LICENSE` — CC0

## موقع عادي
```html
<link rel="stylesheet" href="https://lo-oxll.github.io/Iraq-currency-symbol/iraq-dinar.css">
25,000 <span class="iqd">&#xE900;</span>
```

## ووكومرس (ووردبريس)
ارفع `iraq-dinar-symbol.php` إلى `wp-content/plugins/` ثم فعّل الإضافة.
في إعدادات ووكومرس اختر العملة "Iraqi dinar (IQD)".

## شوبيفاي
في `theme.liquid` قبل `</head>`:
```html
<link rel="stylesheet" href="https://lo-oxll.github.io/Iraq-currency-symbol/iraq-dinar.css">
<script>document.addEventListener('DOMContentLoaded',function(){
document.querySelectorAll('.money,.price').forEach(function(e){
e.innerHTML=e.innerHTML.replace(/IQD|د\.ع/g,'<span class="iqd">&#xE900;</span>')})})</script>
```

## Word / Photoshop / Canva
ثبّت `IraqDinarSymbol.ttf`، ثم الصق الرمز من صفحة التحميل أو استخدم ملفات SVG.

## تثبيت الحزمة على GitHub
ارفع كل الملفات إلى جذر المستودع (Add file ← Upload files).
