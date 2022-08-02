import { FastifyReply, FastifyRequest } from "fastify";

class NewsController {
  static async create(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      return reply.code(200).send({
        message: "Hellow",
      });
    } catch (error) {
      return reply.code(500).send({
        message: "hellow",
      });
    }
  }
}

export default NewsController;
