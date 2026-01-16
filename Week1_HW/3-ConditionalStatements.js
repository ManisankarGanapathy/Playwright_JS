function launchBrowser(browser) {
    if(browser == 'Chrome'){
        console.log("Chrome browser launched")
    }else if(browser == 'Edge'){
        console.log("Edge browser launched")
    }else{
        console.log("Unsupported browser")
    }
}

function runTests(type) {
	switch(type) {
		case "smoke":
			console.log("Running smoke tests")
			break
		case "sanity":
			console.log("Running sanity tests")
			break
		case "regression":
			console.log("Running regression tests")
			break
		default:
			console.log("Default smoke tests running")
	}
}   

launchBrowser('Chrome')
launchBrowser('Edge')
launchBrowser('Firefox')

runTests('smoke')
runTests('sanity')
runTests('regression')
runTests('null')
