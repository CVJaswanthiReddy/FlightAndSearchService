const {FlightRepository , AirplaneRepository}=require('../repository/index')
const {compareTime} =require('../utilis/helper')

class FlightService{

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime))
                {
                    throw{error: 'Arrival time cannot be less than departure time'};
                }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight= await this.flightRepository.createFlight({...data, totalSeats : airplane.capacity});
            return flight;
        } catch (error) {
            if(error.name=='RepositoryError' || error.name== 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }
   
    async getAllFlightData(data){

        try {
            const flights= await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            if(error.name=='RepositoryError' || error.name== 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }

    async getFlight(flightId){
        try {
            const flight= await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            if(error.name=='RepositoryError' || error.name== 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }

    async updateFlights(flightId,data){
        try {
            const response= await this.flightRepository.updateFlights(flightId,data);
            return response;
        } catch (error) {
            if(error.name=='RepositoryError' || error.name== 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }
}


module.exports=FlightService;
/**
 *  flightNumber
 *  airplaneId
 *  departureAirportId
 *  arrivalAirportId
 *  arrivalTime
 *  departureTime
 *  price
 *  totalSeats -> airplane
 */
