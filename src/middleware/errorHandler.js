export function notFound(req, res) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(error, _req, res, _next) {
  let statusCode = error.statusCode || error.status || 500;
  let message = error.message || "Server error";

  // Mongoose invalid ObjectId
  if (error.name === "CastError") {
    statusCode = 400;
    message = "Invalid id format";
  }

  // Mongoose validation
  if (error.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(error.errors || {})
      .map((e) => e.message)
      .join(", ") || message;
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "An account with this email already exists.";
  }

  if (statusCode >= 500) console.error(error);
  res.status(statusCode).json({ error: message });
}
