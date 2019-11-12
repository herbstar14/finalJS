module.exports =function(app){

    app.get('/' ,function(req,res){

        res.send('hello world')
    })

    app.get('/user.input' , function(req,res){
res.render('user_input.html')

    })

    app.post('user_input' , function(req,res){

        res.send(req.body)
    })


}