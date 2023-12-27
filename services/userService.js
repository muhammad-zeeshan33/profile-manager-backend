const User = require('../models/userModel');

class UserService {    
   static async registerUser(payload) {                
        return await User.create(payload);        
    }
    
   static async authenticateUser(username) {
        const user = await User.findOne({
            where: {
                email: username,                
            }
        });
        return user;        
    }
    
    static async getUserDetails(userId) {        
        return await User.findOne({
            where: {
                id: userId,
            }
        });
    }
        
}

module.exports = UserService;
