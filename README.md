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

### Testing before Deploying

To locally test the deployed version of your app run these commands:

* `npm run heroku-postbuild`
* `npm run start`

## Deploying

At first you can deploy your project from you local machine after setting up Heroku just by running `git push heroku master` from your command line.

Once this is stable you can look into using GitHub actions to automate the deployment process.  For this you will need to find/create an Action that:

* Pushes master to a remote repository when a branch is merged into master.

---

## Development

To develop your app, run both the client and api in separate console tabs:

* `npm run dev-api`
* `npm run dev-client`



