exports.getNotifs = (req, res) => {
    const body = req.body ?? 'no body'
    res.send({ 
        query: req.query, 
        body,
        params: req.params,
    })
}

exports.home = (req, res) => {
    res.send({ howdy: 'hi'})
    // res.render('home.hbs')
}