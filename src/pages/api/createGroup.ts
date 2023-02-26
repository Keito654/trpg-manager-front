import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import prisma from "libs/initPrisma";
import { NextApiHandler } from "next";
import { groupRegistrationFormSchema } from "types/schema/groupRegistrationForm";

const handler: NextApiHandler = async (req, res) => {
  try {
    const supabase = createServerSupabaseClient({ req, res });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      throw new Error(
        "ユーザーIDを取得できませんでした。もう一度試してください。"
      );
    }

    const data = await groupRegistrationFormSchema.validate(req.body);

    const group = await prisma.group.create({
      data: {
        name: data.groupTitle,
        description: data.description,
        shareKey: data.urlForJoin,
        creatorID: session.user.id,
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
