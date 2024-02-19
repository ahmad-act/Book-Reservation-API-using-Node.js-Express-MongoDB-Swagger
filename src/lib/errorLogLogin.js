function errorLogLogin(error) {
    let errors = { email: '', password: '' };

    // incorrect email
    if (error.message === 'incorrect email') {
        errors.email = 'The email is not registered';
    }

    // incorrect password
    if (error.message === 'incorrect password') {
        errors.password = 'The password is incorrect';
    }

    // duplicate email error
    if (error.code === 11000) {
        errors.email = 'The email is already existed';
        return errors;
    }

    // validation errors
    if (error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}


module.exports = errorLogLogin;