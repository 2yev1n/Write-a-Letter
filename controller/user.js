const { User } = require("../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const salt = process.env.SALT;

const sign_up = async(req, res) => {
    const { id, password, name } = req.body;

    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');

    try{
        await User.create({
            user_id : id,
            password : hashPassWord,
            name
        });
        res.status(200).json({
            message: "성공"
        });
    } catch(err) {
        res.status(409).json({
            message: "아이디 중복"
        });
        console.error(err);
    }
};

const login = async(req, res) => {
    const { id, password } = req.body;
    const secretkey = req.app.get("jwt-secret");
    console.log(id, password, secretkey);

    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');

    try{
        const user = await User.findOne({
            where: {
                user_id : id,
            },
        });
        if(user.password === hashPassWord) {
            const accessToken = jwt.sign(
                {
                    user_id : user.user_id,
                    name: user.name,
                }, secretkey,
                {
                    expiresIn: "24h",
                }
            );
            res.status(200).json({
                message: "로그인 성공",
                accessToken,
            });
        } else {
            res.status(403).json({
                message: "로그인 실패",
            });
            console.log(err);
        }
    } catch(err) {
        console.error(err);
        res.status(400).json({
            message: "존재하지 않는 유저",
        });
    }
};

module.exports = {
    sign_up,
    login
}