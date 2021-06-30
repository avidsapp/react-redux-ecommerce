## Upstream Repo

Forked from [this repo](https://github.com/ZhangMYihua/crwn-clothing-firebase-cart).

## Customize
- Theming at `/client/global.styles.js`
- Update `/client/public/` dir:
    - `index.html`
    - `favicon.ico`
    - `manifest.json`
    - images
- Update Stripe publishable key in `/client/src/components/stripe-button/stripe-button.component.jsx`
- Update Firebase config in `/client/src/firebase/firebase.utils.js`
- Update data on Firestore backend - [Programmatically done here](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15189164#content)

## Environment Variables
- STRIPE_SECRET_KEY=****
- LOGIN_USER=****@gmail.com
- LOGIN_PW=****
- SEND_TO_EMAIL=****@whatever.com

## TO DO:
- Individual product pages
- Product variations
- Printful API integration & shipping
- Check ErrorBoundary & lazyWithRetry
- Add testing to new components
- Convert back-end into Lamdas
