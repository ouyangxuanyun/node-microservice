class HttpError extends Error {
    constructor(statusCode, message, errCode, errInfo) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.errCode = errCode;
        this.errInfo = errInfo;
    }
}


class ServerError extends HttpError {
    constructor(errInfo) {
        super(500, '服务器内部错误，请稍后重试', 500000, errInfo)
    }
}


module.exports = {HttpError,ServerError};