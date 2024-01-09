
export default function Home() {
  const speakeasy = require("speakeasy");
const qrcode = require("qrcode");


var secret =speakeasy.gene({
  name:"nkanfkjsdakf;ldkjfklsdjlfksjdklf"
})

qrcode.toDataURL(secret.otpauth_url,function(_err,data){
  console.log(data);
});

}
