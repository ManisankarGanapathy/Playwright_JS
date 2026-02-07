var Environent;
(function (Environent) {
    Environent[Environent["LOCAL"] = 0] = "LOCAL";
    Environent[Environent["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environent[Environent["STAGING"] = 9] = "STAGING";
    Environent[Environent["PRODUCTION"] = 10] = "PRODUCTION";
})(Environent || (Environent = {}));
function runTests(env) {
    console.log('Test is running in the environemnt: ', env);
}
runTests(Environent.LOCAL);
runTests(Environent.DEVELOPMENT);
runTests(Environent.STAGING);
runTests(Environent.PRODUCTION);
