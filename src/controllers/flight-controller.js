const { FlightService }= require('../services/index');
const{SuccessCodes} = require('../utilis/error-code');
const flightService= new FlightService();

const create= async(req,res)=>{
    try {
        const flightRequestData={
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            deartureAirportId: req.body.deartureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
       const flight = await flightService.createFlight(flightRequestData);
       return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'successfully created a flight'
       }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not created a flight",
            err:error
        });
    }
}

const getAll = async(req,res) => {
    try {
        const flights= await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data:flights,
            success:true,
            err:{},
            message:'successfully fetched a flight'
       });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: " Not abe to fetch the flight",
            err:error
        });
    }
}

module.exports={
    create,
    getAll
}