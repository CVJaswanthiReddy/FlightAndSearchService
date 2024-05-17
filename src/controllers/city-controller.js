const { CityServices } = require('../services/index');

const cityService = new CityServices();

const create= async(req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:" successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not created a city",
            err:error
        });
    }
}
//DELETE -> /city/:id
const destroy = async(req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200),json({
            data:response,
            success:true,
            message:" successfully deleted a city",
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not deleted a city",
            err:error
        });
    }
}


//GET -> /city/:id
const get = async(req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200),json({
            data:response,
            success:true,
            message:" successfully fetched a city",
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not able to get the city",
            err:error
        });
    }
}

//patch -> /city/:id ->req.body
const update = async(req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200),json({
            data:response,
            success:true,
            message:" successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not able to update the city",
            err:error
        });
    }
}

module.exports ={
    create,
    destroy,
<<<<<<< HEAD
    get,
    update
}
=======
    update,
    get
}
>>>>>>> e75041b47b420137d2a5f54ab22b0d2d7af370ca
