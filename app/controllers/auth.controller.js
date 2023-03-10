const db = require("../models");
const config = require("../config/auth.config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const logger = require('../../utils/logger');

//Sample Query

exports.MyQuery = async (req, res) => {
  logger.info(`MyQuery request : ${JSON.stringify(req.body)}`);
  try {
      const FirstQueryRes =    await db.sequelize.query(`SELECT * from employee_details`);
     
      console.log("First response",FirstQueryRes[0])   

      return res.send({data:FirstQueryRes});
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.SecondQuery = async (req, res) => {
    logger.info(`SecondQuery request : ${JSON.stringify(req.body)}`);
    try {
        console.log("groupid",req.body.GroupId)
        const FirstQueryRes =    await db.sequelize.query(`SELECT * from group_master where group_id ='${req.body.GroupId}' `);
       
        console.log("First response",FirstQueryRes[0])   
                    
        return res.send({data:FirstQueryRes});
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
};