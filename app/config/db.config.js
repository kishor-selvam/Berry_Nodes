module.exports = {
    HOST : "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "employee",
    dialect:"mysql",
    dialectOptions : {
        userUTC:false,
    },
    timezone:'+05:50',
    pool:{
        max:13,
        min:0,
        acquire:150000,
        idle:90000
    }
};