import { logMessage } from "../modules/logging.js";

const PAGE_NAME = "spacing.js";
let message = "Page has fully loaded!";

window.addEventListener("load", () => {
    logMessage(PAGE_NAME, message);
});