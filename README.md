# Gmail Sender

This project is a simple Node.js application that allows users to send emails using Gmail's SMTP service. It's a basic implementation designed to help users understand how to work with Node.js and the Nodemailer package to send emails programmatically.

## Features

- Send emails using your Gmail account.
- Supports HTML content in emails.
- Easy to configure and use.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- A Gmail account to use for sending emails.
- Enable Two factor authentication in your Gmail account and use Gmail app password instead of using a Gmail password [Here's how to get app password](https://support.google.com/mail/answer/185833?hl=en).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pratiyankkumar/gmail-sender.git

2. Navigate to the project Directory:
    ```bash
    cd gmail-sender

3. Install the required dependencies:
    ```bash
    npm install

## Usage

1. Add your Gmail and Gmail App Password:
    ```bash
    node app.js addmail --gmail="your-gmail-here@gmail.com" --password="your-password-here"

2. Add a data to send to receiver:
    ```bash
    node app.js writemail --gmail="receivers-gmail-here@gmail.com" --subject="your subject here" --body="your body here"


3. Send your mail:
    ```bash
    node app.js send

If everything is set up correctly, the email will be sent, and you'll see a success message in the console.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## Contact
If you have any questions or feedback, feel free to reach out via GitHub Issues.
