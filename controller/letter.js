const { Letter }= require("../models");

const writeletter = async(req, res) => {
    const { name, context } = req.body;
    const bag_ID = req.params.bag_id;
    
    try {
        await Letter.create({
            name: name,
            context: context,
            bag_id: bag_ID
        })
        res.status(200).json({
            message: "편지 작성 성공!"
        });
    } catch(err) {
        res.status(403).json({
            message: "편지 작성 실패"
        })
        console.error(err);
    }
};

const CountLetter = async(req, res) => {
    const bag_ID = req.params.bag_id;

    try{
        const letters = await Letter.count({
            where : {
                bag_id : bag_ID
            }
        });
        res.status(200).json({
            message : letters + "개의 복편지가 들어있음!"
        });
    } catch(err)
    {
        res.status(404).json({
            message: "편지 없음"
        })
        console.error(err);
    }
};

module.exports = {
    writeletter,
    CountLetter
};