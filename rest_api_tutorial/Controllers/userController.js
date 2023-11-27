const {user} = require('../Models')

class UserController{
    static async getAllUsers(req,res){
        try{
            await user.findAll({}).then((result)=>{
                res.status(200).json({result})
            })
        }catch(e){
            res.status(404).json({error:e.massage})
        }
    }

    static async createUser(req,res){
        try{
            const {name,age,description,workId} = req.body
            await user.create({
                name: name || "",
                age: +age || 0,
                description : description || "",
                workId: workId || 0,
            }).then((result)=>{
                res.status(200).json({result})
            })

        }catch(e){
            res.status(404).json({error:e.massage})
        }
    }

    static async deleteUser(req,res){
        try{
            const id = +req.params.id
            await user.destroy({
                where:{id:id}
            }).then((result)=>{
                if (result == 1){
                    res.status(200).json({message: `user with ${id} has been deleted`})
                }else{
                    res.status(404).json({message: `user with ${id} not found!`})
                }
            })

        }catch(e){
            res.status(404).json({error:e.massage})
        }
    }

    static async updateUser(req,res){
        try{
            const id = +req.params.id
            const {name,age,description,workId} = req.body
            const User = await user.findByPk(id)
            if (!User){
                res.status(404).json({message:'User not found'})
            }
            await user.update({
                name: name || User.dataValues.name,
                age: +age || User.dataValues.age,
                description : description || User.dataValues.description,
                workId: workId || User.dataValues.workId,
            }).then((result)=>{
                res.status(200).json({result})
            })

        }catch(e){
            res.status(404).json({message:e.massage})
        }
    }

}


module.exports = UserController;