const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "server/config/config.env" });
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});