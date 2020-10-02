module.exports = {
    addPost: (req, res) => {
        const db = req.app.get('db')
        const { title, content } = req.body
        db.add_post([title, content]).then(post => {
            res.status(200).send(post[0])
        })
    },
    editPost: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { title, content } = req.body
        db.edit_post(id, title, content)
            .then(post => {
                res.status(200).send(post)
            })
    },
    getPost: (req, res) => {
        req.app.get('db')
            .get_posts()
            .then(posts => {
                res.status(200).send(posts)
            })
    },
    deletePost: (req, res) => {
        const db = req.app.get('db')
        console.log('---------------', req.params , '------------------------')
        const { id } = req.params
        db.delete_post().then( _ => {
            res.sendStatus(200)