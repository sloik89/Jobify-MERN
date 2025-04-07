Install Packages and Setup Install Script

```sh
npm install bcryptjs@2.4.3 concurrently@8.0.1 cookie-parser@1.4.6 dayjs@1.11.7 dotenv@16.0.3 express@4.18.2 express-async-errors@3.1.1 express-validator@7.0.1 http-status-codes@2.2.0 jsonwebtoken@9.0.0 mongoose@7.0.5 morgan@1.10.0 multer@1.4.5-lts.1 nanoid@4.0.2 nodemon@2.0.22 cloudinary@1.37.3 dayjs@1.11.9 datauri@4.1.0 helmet@7.0.0 express-rate-limit@6.8.0 express-mongo-sanitize@2.2.0
```

### Not found and Error Middleware

The 'not found' middleware in Express.js is used when a request is made to a route that does not exist. It catches these request nad responds with a 404 status code, indicating that the requested resource was not found.

On the other hand, the "error" middleware in Express.js is used to handle any errors that occur during the processing of a request. It is typicaly used to catch unexpected errors or exceptions that are not explicityly handled in the application code. It logs the error and sends a 500 status code, indicating an internal server error.

In summary, the "not found" middleware is specifically designed to handle request for non-existent routes, while the "error" middleware is catch-all for handling unexpected errors that occur durning request processing.

### Express async errors

Express async errors handles asynchrouns errors and passes them to the Error middleware

### Example code errors

200 OK
201 CREATED
400 BAD_REQUEST
401 UNAUTHORIZED
403 FORBIDDEN
404 NOT_FOUND
500 INTERNAL_SERVER_ERROR

### Express-Validator;

```js
app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 50 })
      .withMessage("name must be at least 50"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      const errMsg = errors.array().map((er) => er.msg);
      return res.status(400).json({ errors: errMsg });
    }
    next();
  },
  (req, res) => {
    res.json({ msg: "test" });
  }
);
```
