import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Scenario } from "features/scenarioList/scenario";
import prisma from "libs/initPrisma";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function ScenarioPage({
  data,
  groupId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Scenario scenarioList={data} groupId={groupId} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { groupId } = context.query;

  const supabase = createServerSupabaseClient(context);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // GroupUserに、セッションIDとグループIDが存在するか確認
  const groupMemberData = await prisma.userGroup.findFirst({
    where: {
      userId: session?.user?.id,
      groupId: groupId as string,
    },
  });

  if (!groupMemberData) {
    throw new Error("エラーが発生しました。もう一度お試しください。");
  }

  const data = await prisma.scenario.findMany({
    select: {
      id: true,
      name: true,
      imageKey: true,
    },
    where: {
      groupId: groupId as string,
    },
  });

  const scenarioData = data.map((x) => ({
    id: x.id,
    scenarioTitle: x.name,
    image: x.imageKey,
  }));

  return {
    props: { data: scenarioData, groupId: groupId as string },
  };
};
