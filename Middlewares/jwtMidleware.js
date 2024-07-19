//used to verfy token

const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware fn")

    try { const token = req.headers['authorization'].split(" ")[1]   //Authorization in lowercase because its a header
      
    console.log(token);

          if (token){
            
              jwtResponse=(jwt.verify(token,process.env.JWT_SECRET));
              console.log(jwtResponse);
              req.payload=jwtResponse.userId
              next()
          }else{
              res.status(401).json("Invalid Token")
          }

    }catch{
    res.status(403).json("Please Login")
    }
}


module.exports = jwtMiddleware