
// Private methods

// Public methods
exports.checkOperationAccessibilityByRole = (authUserRoleSerial, maxAccessibilityLevel, operationName) => {
    const start = 1;
    const end = maxAccessibilityLevel;

    // Generate an array of numbers from start to end
    const filterArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    // Check if 5 exists in the array
    const isExists = filterArray.includes(authUserRoleSerial);

    if (!isExists) {
        const error = new Error();
        error.status = 403;
        error.message = 'You are not authorized. Please contact your administrator.'
        error.error = `You are not authorized to access the ${operationName}`
        throw error;
    }
};

exports.getDataAccessibilityRoleFilter = (authUserRoleSerial) => {
    if (authUserRoleSerial === 99) {
        const error = new Error();
        error.status = 403;
        error.message = 'You are not authorized. Please contact your administrator.'
        error.error = `You are not authorized to access this data`
        throw error;
    }

    const endRoleSerial = 10; // See Role Serial of userSchema

    let accessibilityRoleSerials = [];
    for (let i = authUserRoleSerial; i <= endRoleSerial; i++) {
        accessibilityRoleSerials.push(i);
    }

    return { $in: accessibilityRoleSerials };
};
