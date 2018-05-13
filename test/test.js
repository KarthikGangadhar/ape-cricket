/*
 * Test runner
 *
 */

// Dependencies
const server = require('../server.js');
const assert = require('assert');
const cypher = require('../test/helper');
const config = require('../constants.json');

// Application logic for the test runner
_app = {};

// Holder of all tests
_app.tests = {
    'unit': {}
};

// Assert that the cricket function is returning a object
_app.tests.unit['server.cricket should return a object with status 200'] = async (done) => {
    server.cricket(cypher.DecryptKey(config.encryption.key), response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(response.message, 'Live cricket score');
        assert.equal(response.statusCode, 200);
        done();
    });
};

// Assert that the schedule function is returning a object
_app.tests.unit['server.schedule should return a object with status 200'] = async (done) => {
    server.schedule(cypher.DecryptKey(config.encryption.key), response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(response.message, 'upcoming match schedules');
        assert.equal(response.statusCode, 200);
        done();
    });
};

// Assert that the upcomingMatches function is returning a object
_app.tests.unit['server.upcomingMatches should return a object with status 200'] = async (done) => {
    server.upcomingMatches(cypher.DecryptKey(config.encryption.key), response => {
        response = JSON.parse(response);
        assert.equal(typeof (response), 'object');
        assert.equal(response.message, 'Live cricket score');
        assert.equal(response.statusCode, 200);
        done();
    });
};

// Count all the tests
_app.countTests = () => {
    let counter = 0;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    counter++;
                }
            }
        }
    }
    return counter;
};

// Run all the tests, collecting the errors and successes
_app.runTests = () => {
    let errors = [];
    let successes = 0;
    let limit = _app.countTests();
    let counter = 0;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    (() => {
                        let tmpTestName = testName;
                        let testValue = subTests[testName];
                        // Call the test
                        try {
                            testValue(() => {
                                // If it calls back without throwing, then it succeeded, so log it in green
                                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                                counter++;
                                successes++;
                                if (counter == limit) {
                                    _app.produceTestReport(limit, successes, errors);
                                }
                            });
                        } catch (e) {
                            // If it throws, then it failed, so capture the error thrown and log it in red
                            errors.push({
                                'name': testName,
                                'error': e
                            });
                            console.log('\x1b[31m%s\x1b[0m', tmpTestName);
                            counter++;
                            if (counter == limit) {
                                _app.produceTestReport(limit, successes, errors);
                            }
                        }
                    })();
                }
            }
        }
    }
};

// Product a test outcome report
_app.produceTestReport = (limit, successes, errors) => {
    console.log("");
    console.log("--------BEGIN TEST REPORT--------");
    console.log("");
    console.log("Total Tests: ", limit);
    console.log("Pass: ", successes);
    console.log("Fail: ", errors.length);
    console.log("");

    // If there are errors, print them in detail
    if (errors.length > 0) {
        console.log("--------BEGIN ERROR DETAILS--------");
        console.log("");
        errors.forEach((testError) => {
            console.log('\x1b[31m%s\x1b[0m', testError.name);
            console.log(testError.error);
            console.log("");
        });
        console.log("");
        console.log("--------END ERROR DETAILS--------");
    }


    console.log("");
    console.log("--------END TEST REPORT--------");

};

// Run the tests
_app.runTests();