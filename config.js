// Update these four variables with values from your B2C tenant in the Azure portal
const clientID = "a9c8a9aa-d126-41b3-bd78-d0a36aeb0b01"; // Application (client) ID of your API's application registration
const b2cDomainHost = "pwcacsftest.b2clogin.com";
const tenantId = "pwcacsftest.onmicrosoft.com"; // Alternatively, you can use your Directory (tenant) ID (a GUID)
const policyName = "B2C_1_singnupsiginin1";

const config = {
    identityMetadata: "https://" + b2cDomainHost + "/" + tenantId + "/" + policyName + "/v2.0/.well-known/openid-configuration/",
    clientID: clientID,
    policyName: policyName,
    isB2C: true,
    validateIssuer: false,
    loggingLevel: 'info',
    loggingNoPII: false,
    passReqToCallback: false
}

module.exports = config;