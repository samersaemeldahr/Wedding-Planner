const User = require('./User');
const Questions = require('./Questions');

Questions.belongsTo(User, {
    foreignKey: 'userId',
   // onDelete: 'CASCADE'
});

// User.hasMany(Questions, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

module.exports = {
    User,
    Questions
};