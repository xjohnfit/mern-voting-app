// Middleware to handle 404 errors
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

// Middleware to handle general errors
const errorHandler = (err, req, res, next) => {
    if(res.headerSent) {
        return next(err);
    }
    res.status(err.statusCode || 500);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export { notFound, errorHandler };
