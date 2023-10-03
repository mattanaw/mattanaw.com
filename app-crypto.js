
/*
 * Author: Matt Cavanaugh
 * Date: 7/17/2016
 * Purpose: very simple implementation of CryptoJS
 * Goal: provide very simply encryption and decryption to
 * avoid any external application install, for simple protection.
 */


(function() {


var encrypt = document.getElementById('encrypt'),
    decrypt = document.getElementById('decrypt'),
    clearall = document.getElementById('clearall'),
    passPhrase = document.getElementById('passPhrase'),
    plainText = document.getElementById('plaintext'),
    cipherText = document.getElementById('ciphertext');


encrypt.addEventListener('click', function() {

var plainTextValue = plainText.value,
    passPhraseValue = passPhrase.value;


if (plainTextValue && passPhraseValue) {

    var encrypted = CryptoJS.AES.encrypt(plainTextValue, passPhraseValue);
    cipherText.value = encrypted;


} else {

    alert("Please enter your plaintext or passphrase");

}

});

decrypt.addEventListener('click', function() {

var cipherTextValue = cipherText.value,
    passPhraseValue = passPhrase.value;


if (cipherTextValue && passPhraseValue) {

    var decrypted = CryptoJS.AES.decrypt(cipherTextValue, passPhraseValue);
    plainText.value = decrypted.toString(CryptoJS.enc.Utf8);


} else {

    alert("Please enter your ciphertext or your passphrase");

}

});


clearall.addEventListener('click', function(e) {

	e.preventDefault();
	e.stopPropagation();

	plainText.value = ""; cipherText.value = ""; passPhrase.value = "";

});


//end of main function
})();

