exports.getNotifs = (req, res) => {
    console.log('BODY:', req.body)
    console.log('============================================================================================================================================')
    console.log('============================================================================================================================================')
    console.log('============================================================================================================================================')
    // console.log('SSSSSOMe', req);
    // console.log('===================================')
    // console.log('===================================')
    // console.log('===================================')
    console.log('PARAMS:', req.params, req.query)
    const body = { body: req.query['secret'], some: 'other' }
    // res.json({
    //     query: req.query,
    //     params: req.params, 
    // }) 
    // res.render('secret.hbs', { body })
    // res.status(200).send('RECEIVED')
    res.send({ giorg: req.query })
}

exports.home = (req, res) => {
    res.send({ howdy: 'hi'})
    // res.render('home.hbs')
}