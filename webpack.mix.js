let mix = require('laravel-mix');
processCssUrls: false;
mix
.js('src/app.js', 'js')
.sass('src/app.scss', 'css')
.options({
    processCssUrls: false
 })
.setPublicPath('dist');