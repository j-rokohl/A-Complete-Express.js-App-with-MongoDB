import fs from "node:fs";
import path from "node:path";

export async function errorHandler(err, req, res, next) { 
    
    const statusCode = err.statusCode || 500;
    const timestamp = new Date().toISOString();
    const logEntry = `Status: ${statusCode} \t Message: ${err.message} \t Time: [${timestamp}]\n\tStack: ${err.stack}\n`;

    try {
        const logsDir = path.resolve("logs");
        
        // Does the logs directory exists?
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true }); 
        }

        // Save to logs/error.txt
        await fs.promises.appendFile(path.join(logsDir, "error.txt"), logEntry);
    } catch (logErr) {
        console.error("Error writing to error log file:", logErr);
    }

    // Return response with code
    res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error",
    });
}