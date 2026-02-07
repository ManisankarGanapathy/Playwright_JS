enum Environent{
    LOCAL, 
    DEVELOPMENT,
    STAGING=9,
    PRODUCTION
}

function runTests(env: Environent){
    console.log('Test is running in the environemnt: ',env)
}

runTests(Environent.LOCAL)
runTests(Environent.DEVELOPMENT)
runTests(Environent.STAGING)
runTests(Environent.PRODUCTION)


