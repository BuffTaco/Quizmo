const UserModel = require('./models/User')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
}
const tokenExtractor = (request, response, next) => {
    request.token = getTokenFrom(request)
    next()
    
}
const userExtractor = (req, res, next) => {
    
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    console.log(decodedToken.username)
    /*if (!decodedToken.id){
      return res.json(401).json({ error: 'token invalid' })
    }*/
    UserModel.findOne({username: decodedToken.username}).then(u => {
        
        req.user = u
        next()
        
    }).catch(err => {
        console.log("UserModel fail: ", err)
        next()
    })
    
    
    
}

module.exports = {
    tokenExtractor,
    userExtractor
}