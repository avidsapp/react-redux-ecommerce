## Upstream Repo

Forked from [this repo](https://github.com/ZhangMYihua/crwn-clothing-firebase-cart).

## Customize
- Update `/client/public/` dir:
    - `index.html`
    - `favicon.ico`
    - `manifest.json`
    - images
- Update data on Firestore backend

## Local Environment

[Add .env with Stripe secret](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15305912#content)

## Add data to Firestore

[Programmatically done here](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15189164#content)

## For Netlify hosting
- Add `CI= ` before the run command - [link](https://answers.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
- Add Stripe secret env variable `STRIPE_SECRET_KEY=...`

## TO DO:
- Fix service worker for PWA
