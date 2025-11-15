function timestamp() {
    return new Date().toISOString();
}

export const logger = {
    info: (...msg: any[]) => console.log(`[INFO] [${timestamp()}]:`, ...msg),
    warn: (...msg: any[]) => console.warn(`[WARN] [${timestamp()}]:`, ...msg),
    error: (...msg: any[]) => console.error(`[ERROR] [${timestamp()}]:`, ...msg),
    debug: (...msg: any[]) => {
        if (process.env.NODE_ENV === "development") {
            console.log(`[DEBUG] [${timestamp()}]:`, ...msg);
        }
    },
};