import fs from "node:fs";
import path from "node:path";

export async function requestLogger(req, res, next) {
    const timestamp = new Date().toISOString(); 
    const logEntry = `Method: ${req.method} \t URL: ${req.url} \t Time: [${timestamp}]\n`;

    try {
        const logsDir = path.resolve("logs");

        // Does the dir exist?
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }

        // Save to requests.txt
        await fs.promises.appendFile(path.join(logsDir, "requests.txt"), logEntry);
    } catch (err) {
        console.error("Error writing to request log file:", err);
    }

    // Go to next
    next();
}