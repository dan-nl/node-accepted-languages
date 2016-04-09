'use strict';

/**
 * @param {IncomingMessage} req
 * @param {Object} req.accepted_languages
 * @param {Object} req.headers
 *
 * @param {ServerResponse} res
 * @param {Function} next
 */
function acceptedLanguages( req, res, next ) {
  if ( !req.headers[ 'accept-language' ] ) {
    next();
    return;
  }

  if ( !req.accepted_languages ) {
    // https://help.localizejs.com/docs/detecting-language-of-a-visitor
    req.accepted_languages = req.headers[ 'accept-language' ].match( /[a-zA-z\-]{2,10}/g ) || [];
  }

  next();
}

/**
 * @returns {Function}
 */
module.exports = function acceptedLanguagesMiddleware() {
  return acceptedLanguages;
};