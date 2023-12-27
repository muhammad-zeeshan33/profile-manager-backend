const Profile = require('../models/profileModel');

class ProfileService {
    static async createProfile(payload) {
        return await Profile.create(payload);
    }

    static async updateProfile(userId, payload) {
        return await Profile.update(payload, {
            where: {
                user_id: userId,
            }
        });
    }

    static async getProfile(userId) {
        return await Profile.findOne({
            where: {
                user_id: userId,
            }
        });
    }

    static async deleteProfile(userId) {
        return await Profile.destroy({
            where: {
                user_id: userId,
            }
        });
    }
}

module.exports = ProfileService;