import prisma from "libs/initPrisma";
import { NextApiHandler } from "next";
import { groupRegistrationFormSchema } from "types/schema/groupRegistrationForm";

const handler: NextApiHandler = async (req, res) => {
  try {
    const data = await groupRegistrationFormSchema.validate(req.body);

    if (!data.createID) {
      throw new Error(
        "ユーザーIDを取得できませんでした。もう一度試してください。"
      );
    }

    const group = await prisma.group.create({
      data: {
        name: data.groupTitle,
        description: data.description,
        shareKey: data.urlForJoin,
        creatorID: data.createID,
      },
    });

    await prisma.groupUser.create({
      data: {
        userID: group.creatorID,
        groupID: group.id,
      },
    });

    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

export default handler;
