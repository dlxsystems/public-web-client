# Email Configuration

To enable email sending on the contact form, you need to configure your SMTP settings.

1.  Create a file named `.env.local` in the root of the `web-client` directory.
2.  Copy the following content into it and replace the values with your actual email provider details.

```env
# SMTP Configuration
# Host (e.g., smtp.gmail.com, smtp.office365.com, email-smtp.us-east-1.amazonaws.com)
SMTP_HOST=smtp.example.com

# Port (usually 587 for TLS, 465 for SSL)
SMTP_PORT=587

# Set to 'true' if port is 465, otherwise 'false'
SMTP_SECURE=false

# Your email address and password
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password_or_app_password

# Email Header Details
SMTP_FROM="DLX Systems Contact" <no-reply@dlxsystems.com>
SMTP_TO=your_personal_email@example.com
```

## Note for Gmail Users

If you are using Gmail, you cannot use your normal password. You must use an **App Password**:

1.  Go to your Google Account settings.
2.  Navigate to Security > 2-Step Verification.
3.  Scroll to the bottom and select "App passwords".
4.  Generate a new app password and use that as the `SMTP_PASS`.
