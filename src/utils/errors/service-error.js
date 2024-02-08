const {StatusCodes}=require('http-status-codes');

class ServiceError extends Error{
   
    constructor(
        name='Internal Server Error',
        message='something went wrong',
        description='something went wrong working with',
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
    ){
       super();
       this.name=name;
       this.message=message;
       this.description=description;
       this.statusCode=statusCode;
    }

}

module.exports=ServiceError;