### How to connect locally to Mongo DB:

- Clone the repo or make sure you are working with the latest updated version of the project.
- In the root of the repository create file `.env`
- Put the following link into `.env` file :
`MONGOBD_URI = mongodb+srv://<username>:<password>@cluster0.l1fuv.mongodb.net/ISCHOOLS?retryWrites=true&w=majority`;

- Replace `<username>` and `<password>` with your own name and password that was sent to your email and listed in MongoDB Atlas in the Database Access.

- Make sure that `.env` is listed in your file `.gitignore`;

