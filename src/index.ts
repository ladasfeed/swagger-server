const app = require('express')()
const router1 = require('./routes/user')

app.use(router1)

// Start
app.listen(8000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${8000}`);
});