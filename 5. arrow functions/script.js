function active(requiredP, defaultP, momento) {
    if (defaultP === void 0) { defaultP = "Is Optional"; }
    console.log("This param is required " + requiredP);
    console.log("This param is default " + defaultP);
    console.log("This param is optional " + momento);
}
active("REQUIRED", "DEFAULT", 10);
console.log("---------------------------------------");
active("REQUIRED", "DEFAULT");
console.log("---------------------------------------");
active("REQUIRED");
