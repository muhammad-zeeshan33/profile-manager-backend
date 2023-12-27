class ProfileDto {
    first_name = '';
    last_name = '';
    bio = '';
    address = '';
    constructor(profile) { 
        if(!profile) {
            return;
        }
        this.first_name = profile.first_name;
        this.last_name = profile.last_name;
        this.bio = profile.bio;
        this.address = profile.address;
    }
}

module.exports = ProfileDto;