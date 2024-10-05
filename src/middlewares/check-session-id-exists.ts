import { FastifyReply, FastifyRequest } from 'fastify';

export default function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) {
  const sessionId = request.cookies.sessionId;

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    });
  }

  next();
}
