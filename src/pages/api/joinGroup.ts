import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import prisma from "libs/initPrisma";
import { NextApiHandler } from "next";

type JoinGroupRequestBody = {
  groupId: string;
};

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
    console.log(req.body);

    const { groupId } = req.body as JoinGroupRequestBody;

    if (!groupId) {
      throw new Error(
        "グループの情報を取得できませんでした。もう一度試してください。"
      );
    }

    const userGroup = await prisma.userGroup.create({
      data: {
        userId: session.user.id,
        groupId,
      },
    });

    res.status(200).json({ ok: true, userGroup });
  } catch (error) {
    console.error("Error joining group:", error);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
