const { text } = require('express')
const  moongose = require('mongoose')


const personSchema =  new moongose.Schema({


username :{

    type : String,
    required : true 
},


appname:{

 type : String,

 required : true


},
chatid:{

    type : Number ,
   
    required : true
   
   
   },
   userid:{

    type : Number,
   
    required : true
   
   
   }

})


module.exports = moongose.model('item',personSchema)