const { src, dest, parallel, watch } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const browserSync = require("browser-sync").create();

const css = () =>
  src("src/css/**/*.css")
  .pipe(postcss([tailwindcss("tailwind.config.js"), autoprefixer()]))
  .pipe(dest("./docs/css"))
  .pipe(browserSync.stream());

const html = () =>
  src(["src/ejs/**/*.ejs", "!" + "src/ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(dest("./docs"))
    .pipe(browserSync.stream());

const watchFiles = () =>
    browserSync.init({
      server: {
        baseDir: "./docs"
      },
      open: 'external',
      host: '192.168.0.20'
    });
  watch("./src/css/**/*.css", css);
  watch("./src/ejs/**/*.ejs", html);
  watch("./docs/**/*").on("change", browserSync.reload);

exports.html = html;
exports.css = css;
exports.watchFiles = watchFiles;
exports.default = parallel(html, css,watchFiles);
