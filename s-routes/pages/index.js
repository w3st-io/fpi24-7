const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


router.get(
    '/',
    async (req, res) => {
        res.status(200).send({
            executed: true,
            status: true,
        })
    }
)


module.exports = router