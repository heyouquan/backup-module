const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({ // 定义Schema字段的数据类型和限制条件
    name: {
        type: String,
        required: [true, 'Name fields is required'],
        unique: true
    },
    password: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    avatar_url: String,
    email: String,
    followers: Number,
    following: Number,
    role: String,
    gender: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;