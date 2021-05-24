const User = require('./User');
const Questions = require('./Questions');
const Guest = require('./Guest');
const Info = require("./Info")

Questions.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Info.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Guest.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

// User.hasMany(Guest, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

module.exports = {
    User,
    Questions,
    Guest,
    Info
};