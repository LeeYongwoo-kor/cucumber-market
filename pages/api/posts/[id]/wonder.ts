import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = request;
  const alreadyExists = await client.wondering.findFirst({
    where: {
      userId: user?.id,
      postId: +id.toString(),
    },
    select: {
      id: true,
    },
  });
  if (alreadyExists) {
    await client.wondering.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.wondering.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }
  response.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);