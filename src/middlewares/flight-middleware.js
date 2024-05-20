const{ClientErrorCodes} = require('../utilis/error-code');
const validateCreateFlight=(req,res,next) => {
    if(
        !req.body.flightNumber || 
        !req.body.airplaneId || 
        !req.body.deartureAirportId || 
        !req.body.arrivalAirportId || 
        !req.body.arrivalTime || 
        !req.body.departureTime ||
        !req.body.price
    ) {
        //if any of the body params is missing we come inside the if

        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'inavlid request body for creating flight',
            err:'missing mandatory properties to create a flight'
        })
    }
    next();
}

module.exports= {validateCreateFlight}