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
        return res.status(200).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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
const getAll = async(req,res) => {
    try {
        const cities= await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:" successfully fetched all  cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not able to fetch the city",
            err:error
    });
    }
}
module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}

