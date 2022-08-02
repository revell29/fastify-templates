import { FastifyInstance, FastifyPluginOptions } from "fastify";
import NewsController from "~/controllers/news.controller";

class NewsRoute {
  public prefix_route = "/news";

  async routes(
    fastify: FastifyInstance,
    _options: FastifyPluginOptions,
    _done: any
  ) {
    fastify.get("/", NewsController.create);
  }
}

export default NewsRoute;
