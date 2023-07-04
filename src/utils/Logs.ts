const prefix = "engine";

const successLog = (message: string): void => {
    console.log(`${prefix}.success: ${message}`);
};

const alertLog = (message: string): void => {
    console.warn(`${prefix}.alert: ${message}`);
};

const errorLog = (message: string): void => {
    console.error(`${prefix}.error: ${message}`);
};

const invalidLog = (message: string): void => {
    console.error(`${prefix}.invalid: ${message}`);
};
