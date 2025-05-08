import app from "./app";

const Port = process.env.PORT || 8080;
app.listen(Port, () => console.log(`Server rondando na porta ${Port}`));
