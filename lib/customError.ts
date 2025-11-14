export class HttpResponseError extends Error {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = 400;

        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

export class WebSecurityException extends HttpResponseError {
    constructor(message: string) {
        super(message);
        this.name = "WebSecurityException";
        this.statusCode = 403;

        // Required when targeting ES5
        Object.setPrototypeOf(this, WebSecurityException.prototype);
    }
}


export class UnauthorizedAccess extends HttpResponseError {
    constructor(message: string) {
        super(message);
        this.name = "Unauthorized";
        this.statusCode = 403;

        // Required when targeting ES5
        Object.setPrototypeOf(this, UnauthorizedAccess.prototype);
    }
}

export class ValidationError extends HttpResponseError {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = 400;

        // Required when targeting ES5
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

