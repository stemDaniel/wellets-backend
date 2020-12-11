# [ USERS ]

## Sign up

**FUNCTIONAL REQUIREMENTS**

- [x] the user must be able to register;

**NON-FUNCTIONAL REQUIREMENTS**

- [x] password must be encrypted;
- [x] email must not be case sensitive;

**BUSINESS RULES**

- [x] it is not possible to register with an email that is already in use;

## Sign in

**FUNCTIONAL REQUIREMENTS**

- [x] the user must be able to sign in;

**NON-FUNCTIONAL REQUIREMENTS**

- [x] a JWT token must be generated and stored in the database;

**BUSINESS RULES**

- [x] it is not possible to sign in with an invalid email and password;