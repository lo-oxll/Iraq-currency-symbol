# رمز الدينار العراقي · Iraqi Dinar Symbol

مجاني ومفتوح (CC0) للجميع. الصفحة: https://lo-oxll.github.io/Iraq-currency-symbol/downloads.html

## محتويات المجلد
- `fonts/` — الخط (TTF و WOFF)، الرمز على الشيفرة U+E900
- `assets/` — SVG و PNG (أسود، أبيض، كحلي، ذهبي)
- `css/iraq-dinar.css` — ملف CSS الجاهز
- `plugin/iraq-dinar-symbol.php` — إضافة ووكومرس
- `downloads.html` — صفحة التحميل · `LICENSE` — CC0

## موقع عادي
```html
<link rel="stylesheet" href="https://lo-oxll.github.io/Iraq-currency-symbol/css/iraq-dinar.css">
25,000 <span class="iqd">&#xE900;</span>
```

## ووكومرس (ووردبريس)
ارفع `plugin/iraq-dinar-symbol.php` إلى `wp-content/plugins/` ثم فعّل الإضافة.
في إعدادات ووكومرس اختر العملة "Iraqi dinar (IQD)".

## شوبيفاي
في `theme.liquid` قبل `</head>`:
```html
<link rel="stylesheet" href="https://lo-oxll.github.io/Iraq-currency-symbol/css/iraq-dinar.css">
<script>document.addEventListener('DOMContentLoaded',function(){
document.querySelectorAll('.money,.price').forEach(function(e){
e.innerHTML=e.innerHTML.replace(/IQD|د\.ع/g,'<span class="iqd">&#xE900;</span>')})})</script>
```

## Word / Photoshop / Canva
ثبّت `IraqDinarSymbol.ttf`، ثم الصق الرمز من صفحة التحميل أو استخدم ملفات SVG.

## تثبيت الحزمة على GitHub
انسخ كل المجلدات والملفات إلى جذر المستودع بجانب `index.html` وارفعها.
