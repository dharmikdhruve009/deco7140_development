import { logMessage } from "../modules/logging.js";

const PAGE_NAME = "layout.js";
let message = "Page has fully loaded!";

window.addEventListener("load", () => {
    logMessage(PAGE_NAME, message);
});