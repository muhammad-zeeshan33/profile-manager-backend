const profileService = require('../services/profileService');
const ProfileDto = require('../common/dtos/profileDto');

const create = async (req, res) => {
    const existingProfile = await profileService.getProfile(req.user.id);
    if(existingProfile) {
        return res.json({message: 'Profile already exists'});
    }
    const body = req.body;
    const user = req.user;
    const profileData = new ProfileDto(body);
    profileData.user_id = user.id;    
    const profile = await profileService.createProfile(profileData);
    return res.json(profile);
}


const update = async (req, res) => {
    const existingProfile = await profileService.getProfile(req.user.id);
    if(!existingProfile) {
        return res.json({message: 'Profile does not exists'});
    }
    const body = req.body;
    const user = req.user;
    const profileData = new ProfileDto(body);
    profileData.user_id = user.id;
    const profile = await profileService.updateProfile(user.id, profileData);
    return res.json(profile);
}

const get = async (req, res) => {
    const user = req.user;
    const profile = await profileService.getProfile(user.id);
    return res.json(profile);
}

const remove = async (req, res) => {
    const existingProfile = await profileService.getProfile(req.user.id);
    if(!existingProfile) {
        return res.json({message: 'Profile does not exists'});
    }

    const user = req.user;
    const profile = await profileService.deleteProfile(user.id);
    return res.json(profile);
}

module.exports = {
    create,
    update,
    get,
    remove,
}
