const fs = require("fs");

const html = fs.readFileSync("_claude/tools/sms-qr/index.html", "utf8");
const lib = fs.readFileSync("_claude/tools/sms-qr/qrcode.js", "utf8");
const bundled = html.replace(
  '<script src="./qrcode.js"></script>',
  () => "<script>\n" + lib.replace(/<\/script/gi, "<\\\\/script") + "\n</script>"
);

fs.writeFileSync("_claude/tools/sms-qr/sms-qr.html", bundled, "utf8");
console.log("wrote", bundled.length);
