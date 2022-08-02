import App from "./app";
import NewsRoute from "./routes/news.routes";

export const app = new App({
  plugins: [],
  routes: [NewsRoute],
});

app.listen();
