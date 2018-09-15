module.exports = {

    // The Mongodb URL where CVE entries and users are stored.
    database: 'mongodb://vulnogram:P$$tRul3s!@localhost:27017/vulnogram',

    // Name of the organization that should be used in page titles etc.,
    orgName: 'Avaya',

    // Name of the group that should be used in page titles etc.,
    groupName: 'Product Security Support Team',

    //CNA contact address
    contact: 'securityalerts@avaya.com',

    classification: 'Confidential INTERNAL USE ONLY',
    copyright: '© 2018 Avaya, Inc',

    // Uncomment this line and set a random string to allow unauthenticated access to draft CVE entries that are in review-ready or publish-ready state via /review/<token>/ or /review/<token>/CVE-ID
    // This may be useful to share a link to the draft for internal reviews and only those with the link have access to the drafts.    
    // reviewToken: 'some secret',

    appName: 'Vulnogram',
    // port where this tool is running
    serverPort: 3555,
    basedir: '/',
    mitreURL: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=',
    defectURL: 'https://jira.forge.avaya.com/',
    publicDefectURL: 'https://support.avaya.com/security/',
    // ACE editor
    ace: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.8/ace.js',
    aceHash: "sha384-sVVk7tngixhF2/zKU0IYtVvpuVYLTwt9srAn1ZjLJeEWKh9AebgDI+PD3USZfpBH",

    // JSON Editor
    jsoneditor: 'https://cdnjs.cloudflare.com/ajax/libs/json-editor/0.7.28/jsoneditor.min.js',
    jsoneditorHash: "sha384-kPMw40PaU/i5rM9X+5s/7qmujSY7EXGocROnFOXOnywfZGxp2t4RbQZ1dFwh7UBB",
    
    usernameRegex: '[a-zA-Z0-9]{3,}',

};
