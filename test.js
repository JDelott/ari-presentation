let unusedVariable = 'this should show a warning';

function testFunction() {
    undeclaredVariable = 'this should show an error';
    console.log('missing semicolon')

    let anotherUnused = 'unused variable';

    // Missing return statement
    if (true) {
        return 'something';
    }
    // This function should show "not all code paths return a value" error
}

// Duplicate variable
let unusedVariable = 'duplicate declaration error';

// This should show various errors and warnings