/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
/* const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin",
        editProfile: "B2C_1_profileediting"
    },
    authorities: {
        // Define the default policy for signup/signin
        signUpSignIn: {
            authority: "https://mydevfactorynet.b2clogin.com/mydevfactorynet.onmicrosoft.com/B2C_1_signupsignin",
        },
        editProfile: {
            authority: "https://mydevfactorynet.b2clogin.com/mydevfactorynet.onmicrosoft.com/B2C_1_profileediting"
        }
    },
    authorityDomain: "mydevfactorynet.b2clogin.com"
} */

/**
 * We are using here the IEF framework for custom policies.
 */
 const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_signup_signin",
        editProfile: "B2C_1A_ProfileEdit",
        passwordReset: "B2C_1A_PasswordReset"
    },
    authorities: {
        // Define the default policy for signup/signin
        signUpSignIn: {
            authority: "http://mydevfactorynet.onmicrosoft.com/B2C_1A_signup_signin",
        },
        editProfile: {
            authority: "http://mydevfactorynet.onmicrosoft.com/B2C_1A_ProfileEdit"
        },
        passwordReset: {
            authority: "http://mydevfactorynet.onmicrosoft.com/B2C_1A_PasswordReset"
        }
    },
    authorityDomain: "mydevfactorynet.b2clogin.com"
}