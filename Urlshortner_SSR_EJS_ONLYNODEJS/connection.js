import { connect } from 'mongoose';

function dbConnection (url) {
    return connect(url);
};

export default { dbConnection };

// useNewUrlParser: true:

// This option tells Mongoose to use the new MongoDB driver's URL parser. The new parser is more robust and supports the full MongoDB connection string specification. It is recommended to use this option to avoid deprecation warnings and ensure compatibility with future versions of MongoDB.
// useUnifiedTopology: true:

// This option enables the new unified topology layer in the MongoDB driver. The unified topology layer provides a more consistent and reliable behavior for server discovery and monitoring. It is recommended to use this option to avoid deprecation warnings and benefit from the improvements in the new topology layer.