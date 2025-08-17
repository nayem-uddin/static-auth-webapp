# Static Authentication WebApp

This is the first project during my internship at Krytix Solutions

## Tech stack used

1. Next.js
2. React.js
3. Bootstrap
4. Material UI

## Summary of the authentication flow

1. When the user leaves any field empty, the browser shows an alert to the user to fill in that field
2. When the user fills in all the fields, a server function in this project extracts the data and sends it to the API. Afterwards, one of the following operations takes place based on the response received from the API:

   - If the credentials provided by the user are invalid, the error message is shown up to the user and the user can try again to sign in
   - If the credentials are valid,
     - the token received from the API is stored as a cookie
     - the data is extracted from the token and shown on the dashboard
     - the user is redirected to the dashboard where they can see their details

## App test guidance

### Sign-in

1. Go to the login page clicking the "Login" button at the top right corner of the page
2. Provide your credentials (username and password) and click "sign in" button or press "Enter" key of your keyboard
   (use "nayem" as the username and "1234" as the password for testing)
3. If you provide wrong credentials, a modal will show up on the screen containing the message "Authentication failed"
4. If your credentials are correct, you will be redirected to your dashboard where you will see your details
5. To log out, click the user icon at the top right corner of the page and click the "log out" button appeared, or, if you are visiting the
   dashboard page, click the "sign out" button at the bottom left corner of the page

### Change password

1. In the dashboard, click the `Change password` option at the right pane
2. Provide a valid email Id and click the **continue** button (remember, provide a real email; otherwise, you won't get the OTP.)
3. If your email ID is associated with your account, an email with an OTP will be sent to your email ID and, at the same time, you'll be redirected to a page where you'll be asked to provide your OTP and new password
4. If your OTP is valid, your password will be updated and you'll be redirected to your dashboard. From your next login onwards, you'll be required to provide your updated password to sign in.
