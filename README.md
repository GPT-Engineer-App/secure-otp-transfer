# secure-otp-transfer

This project involves creating a website with HTML, JavaScript, and PHP for sending an OTP (One Time Password) to users' emails as part of a transfer process. The website features a modern UI for a financial transaction, including sections for displaying transaction details, a form for entering an OTP sent to the user's email, and scripts for interacting with Firebase to authenticate users and store OTPs. The HTML structure includes a sophisticated design with a preload section, header, transaction details, and an OTP verification panel. CSS stylesheets for fonts, icons, and Bootstrap are linked to enhance the visual appearance, and JavaScript scripts for form verification, countdown timers, and Firebase operations are incorporated. The project requires modification of the existing JavaScript code to improve the OTP sending functionality, ensuring that the OTP is correctly generated, sent to the user's email, and verified against the stored value in Firestore. The PHP code and its dependencies, like PHPMailer, are mentioned to be working correctly and are responsible for the email sending mechanism.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/secure-otp-transfer.git
cd secure-otp-transfer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
