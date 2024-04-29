const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello GitOps and Argo CD! (I only made 1 commit to change this message)'))
app.listen(3000, () => console.log('Server ready'))
