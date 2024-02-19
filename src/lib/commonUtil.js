exports.generateReferenceNumber = (prefix = 'REF') => {
    // Add a prefix to the reference number
    let referenceNumber = prefix;

    // Add timestamp to the reference number (optional, you can customize the format)
    const timestamp = new Date().toISOString().replace(/[-:T.]/g, '');
    referenceNumber += timestamp;

    // Add a random number to the reference number
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    referenceNumber += randomPart;

    return referenceNumber;
}

exports.isEmptyStringNullOrUndefined = (value) => {
    // Check for empty string, null, or undefined
    if (value === '' || value === null || value === undefined) {
        return true;
    } else {
        return false;
    }
}

