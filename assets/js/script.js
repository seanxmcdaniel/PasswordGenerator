
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  const char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '~!@-#$']
 
  var a = window.confirm('Would you like your password to contain uppercase letters?')
  if(a) {
    const char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  } else {
    console.log('') }
  var b = window.confirm('Would you like your password to contain lowercase letters?')
  if(b) {
  const char = ['abcdefghijklmnopqrstuvwxyz']
  console.log('abcdefghijklmnopqrstuvwxyz')
  } else {
  console.log('') }
  var c = window.confirm('Would you like your password to contain numbers?')
  if(c) {
    const char = ['0123456789']
    console.log('0123456789')
  } else {
    console.log('') }
  var d = window.confirm('Would you like your password to contain special characters?')
  if(d) {
    const char = ['~!@-#$']
    console.log('~!@-#$')
  } else {
    console.log('')
  }

  var generatePassword = (
    length = window.prompt("How long would you like your password to be? Type a number between 8 and 128."),
    wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
    ) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => wishlist[x % wishlist.length])
      .join('')

  console.log(generatePassword())

  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );

