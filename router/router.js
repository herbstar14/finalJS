
var counter =5
module.exports =function(app){

    app.get('/' ,function(req,res){

      res.render('index' , {

        title: "My Homepage",
        length : 5
      })
    })

    app.get('/user.input' , function(req,res){
res.render('user_input.html')

    })

    app.post('user_input' , function(req,res){

        res.send(req.body)
    })


}