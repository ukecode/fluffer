const axios = require('axios'); 

module.exports = function(url){

    const firstCheck = url.match(/herokuapp.com/)
    if(firstCheck){
        axios.get(url).then((res)=>{
            if(res.data){
                console.log(res.data)
            }else{
                console.log(false)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        console.log(false)
    }
}