import { ExpressApp } from "./express-app";

const PORT = process.env.APP_PORT;

export const StartServer = async () => {
  const expressApp = await ExpressApp();
  expressApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    console.error(err);
    process.exit(1);
  });
};

StartServer().then(() => {
    console.log("Server started");
});