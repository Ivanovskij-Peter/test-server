const ApiError = require("../exeptions/api-error");
const tokenService = require("../service/token-service");

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnathorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnathorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);

    req.user = userData;
    next();
  } catch (error) {
    next(ApiError.UnathorizedError());
  }
};
