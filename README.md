# Deploymenting

> [live demo](https://polar-cliffs-55873.herokuapp.com/)

A model of how you can set up your project for development & deployment.

```
deploymenting/
  |- index.js
  |- package.json
  |- client/
  |   |- (create-react-app)
  |- api/
      |- index.js
      |- dev.js
```

---

## Deployment

The main `index.js` in this directory is for deployment. It provides access to your api behind `/api` and statically serves the client from `/client/build`.  You can copy-paste this file directly, there should be need to modify it for your project.

To locally test the deployed version of your app run these commands:

* `npm run heroku-postbuild`
* `npm run start`

---

## Development

To develop your app, run both the client and api in separate console tabs:

* `npm run dev-api`
* `npm run dev-client`


