class UserDto {    
    email = '';
    password = '';    

    constructor(model) {        
        if(!model) {            
            return;
        }
        this.email = model.email;
        this.password = model.password;        
    }
    
}

module.exports = UserDto;