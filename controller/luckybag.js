const { Luckybag, Letter } = require("../models");

const createLuckybag = async(req, res) => {
    const user_ID = req.decoded.user_id;
    const Name = req.decoded.name;
    
    console.log(user_ID, Name);
    try{
        Luckybag.create({
            bag_id: user_ID,
            name: Name
        });
        
        res.status(200).json({
            message: "복주머니 생성 완료",
        });
    } catch(err) {
        res.status(403).json({
            message: "복주머니 생성 실패",
        });
    }
};

const ViewLuckybag = async(req, res) => {
    const user_ID = req.decoded.user_id;
    const Name = req.decoded.name;

    try{
        const letters = await Letter.findAll({
            where: {
                bag_id : user_ID
            },
        });
        res.status(200).json(letters);
    } catch(err)
    {
        res.status(404).json({
            message: "작성된 편지가 없음..ㅠ"
        });
    }
};


module.exports = {
    createLuckybag,
    ViewLuckybag
};