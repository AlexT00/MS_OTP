# ms_otp

# Introduction
This repository contains the tampermonkey script required for the Microsoft Account 2FA.

By using the scripts in this repository, you acknowledge that having the 2FA keys stored in plaintext opens up a host of attack vectors. Essentially, these scripts negates the benefits of 2FA. Do not use this script if you do not understand what you're doing.
The author will not be responsible for any harm or vulnerabilities caused by this script.

# Usage
1. Download TamperMonkey.
2. Add both of the scripts into TamperMonkey. Replace the SECRET_KEY with your Microsoft Authenticator Secret Key for 2FA.
3. Load the webpage normally and the 2FA code will be filled in automatically.