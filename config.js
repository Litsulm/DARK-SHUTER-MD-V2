const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=XFdjRQSK#Gcoovop1Mm-DI7kKpVWWPAJKchLfnMKrGet161nLfgE',
GITHUB_AUTH_TOKEN: 'put token', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'put your github user name',

};
