import prisma from "libs/initPrisma";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const { groupId } = req.query;

    const group = await prisma.group.findUnique({
      select: {
        shareKey: true,
      },
      where: {
        id: groupId as string,
      },
    });

    if (!group) {
      throw new Error("グループが見つかりませんでした。");
    }

    res.json({ ok: true, shareKey: group.shareKey });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

export default handler;
