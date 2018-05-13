// Dependencies
const crypto = require('crypto');
const config = require('../constants.json')

// Container
cypher = {};

// To encrypt key
cypher.EncryptKey = (key) => {
    if (typeof (key) == 'string' && key.length > 0) {
        const cipher = crypto.createCipher(config.encryption.type, config.encryption.secreteKey);
        let encrypted = cipher.update(key, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    } else {
        return false;
    }
};

// To decrypt key
cypher.DecryptKey = (key) => {
    if (typeof (key) == 'string' && key.length > 0) {
        const decipher = crypto.createDecipher(config.encryption.type, config.encryption.secreteKey);
        let decrypted = decipher.update(key, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    } else {
        return false;
    }
};

// Export container
module.exports = cypher;