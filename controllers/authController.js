
const userService = require('../services/userService');
const UserDto = require('../common/dtos/userDto');
const config = require('../config/enviroments.dev');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const userData = req.body;
    const existingUser = await userService.authenticateUser(userData.email);    
    if(existingUser) {
        return res.json({message: 'User already exists with this email'});
    } else {        
        const userDto = new UserDto(userData);
        userDto.password = await passwordHash(userDto.password);
        const user = await userService.registerUser(userDto);

        const token = await generateToken(user);        
        userDto.accessToken = token;
        userDto.password = undefined;
        return res.json(userDto);
    }    
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await userService.authenticateUser(email);
    if(!user) {
       return res.json({message: 'User not found'});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.json({message: 'Invalid password'});
    }

    const token = await generateToken(user);    
    const userDto = new UserDto();
    userDto.id = user.id;
    userDto.email = user.email;    
    userDto.password = undefined;  
    userDto.accessToken = token;        
    return res.json(userDto);
}

const passwordHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const generateToken = async (user) => {
    const token = jwt.sign({id: user.id}, config.jwtSecret, {expiresIn: config.jwtExpiration});
    return token;
}

module.exports = {
    register,
    login,    
}