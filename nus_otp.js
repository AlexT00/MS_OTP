// ==UserScript==
// @name         Auto TOTP Filler for NUS Logins
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically generates and fills in the TOTP on the Outlook sign-in page.
// @author       Alexander Tok
// @match        https://vafs.u.nus.edu/adfs/ls/*
// @grant        none
// @require      https://raw.githubusercontent.com/jiangts/JS-OTP/master/dist/jsOTP.min.js
// ==/UserScript==


(function() {
    'use strict';

    // Replace with your TOTP secret in HEX format.
    const secret = "SECRET_KEY";


    // Fills the OTP input field if it exists.
    function fillTOTP() {
        var totp = new jsOTP.totp();
        var otpCode = totp.getOtp(secret);
        const otpField = document.getElementById("verificationCodeInput");
        if (otpField) {
            otpField.value = otpCode;
        }
    }

    // On page load, fill the field and update it every second.
    window.addEventListener('load', function() {
        fillTOTP();
        setInterval(fillTOTP, 1000);
    });
})();
