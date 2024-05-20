class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const respone= await this.repository.create(data);
            return respone;
        } catch (error) {
            console.log('something went wrong in the crud service');
            throw error;
        }
    }

    async destroy(id){
        try {
            const respone= await this.repository.destroy(id);
            return respone;
        } catch (error) {
            console.log('something went wrong in the crud service');
            throw error;
        }
    }

    async get(id){
        try {
            const respone= await this.repository.get(id);
            return respone;
        } catch (error) {
            console.log('something went wrong in the crud service');
            throw error;
        }
    }

    async getAll(){
        try {
            const respone= await this.repository.getAll();
            return respone;
        } catch (error) {
            console.log('something went wrong in the crud service');
            throw error;
        }
    }
    async update(id,data){
        try {
            const respone= await this.repository.update(id,data);
            return respone;
        } catch (error) {
            console.log('something went wrong in the crud service');
            throw error;
        }
    }
}

module.exports= CrudService;
