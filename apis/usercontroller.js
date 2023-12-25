const user_model = require("./usermodel.js");
const mongoose = require('mongoose');

const createUser = async (req, res) => {
    const { name, age } = req.body;

    try {
        
        if (!name) {
            return res.status(400).json({ error: 'User name is required' });
        }
        if (!age) {
            return res.status(400).json({ error: 'Age is required' });
        }
        const newUser = new user_model({
            name,
            age
        });

        await newUser.save();
        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

// User get by ID;
const getUser = async(req,res) =>{
    let username = req.body.name;

    if (!username) {
        return res.status(400).json({ error: 'User name required for search' });
    }
    try {
        const sortby = req.body.sortby === 'desc' ? -1 : 1;
        const page = parseInt(req.body.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const users = await user_model.find({ name: username }) 
                    .sort({ age: sortby }) 
                    .skip(skip)
                    .limit(limit);
      
        if (!users) {
            return res.status(400).json({ msg: "users not found" });
          }
          res.status(200).json({
            response: [
              { status: true, message: "Successfully User Fetched !", data: users },
            ],
          });
        
    } catch (err) {
        console.error('Error getting user:', err);
        return res.status(500).json({ error: 'Server error' });
    }
}


module.exports = {
    createUser,
    getUser
};
  