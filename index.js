var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

fs.createReadStream("Resume.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("Resume.pdf"))