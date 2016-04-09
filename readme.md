# accepted languages
an express middleware.

adds an array of accepted languages to the IncomingMessage object, `req.accepted_languages`, based on the IncomingMessage `req.headers[ 'accept-language' ]`.

## setup and use
add the following to your middleware setup.
```javascript
var acceptedLanguages;
acceptedLanguages = require( 'node-accepted-languages' );

app.use( acceptedLanguages() );
```
you can then use the `req.accepted_languages` array for languages accepted by requesting agent.