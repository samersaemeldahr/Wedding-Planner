const User = require('./User');
const Questions = require('./Questions');
const Guest = require('./Guest');
<<<<<<< HEAD
=======
const Info = require("./Info")
>>>>>>> 9e4fd3cc2282994f2904a9b0eefdf3095f51fe37

Questions.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

<<<<<<< HEAD
=======
Info.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

>>>>>>> 9e4fd3cc2282994f2904a9b0eefdf3095f51fe37
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
<<<<<<< HEAD
    Guest
=======
    Guest,
    Info
>>>>>>> 9e4fd3cc2282994f2904a9b0eefdf3095f51fe37
};