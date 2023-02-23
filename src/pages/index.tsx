import { GroupList } from "features/groupList/list";
import prisma from "libs/initPrisma";
import { supabase } from "libs/initSupabase";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const groupData = data.map((x) => ({
    groupTitle: x.name,
    description: x.description,
  }));

  return <GroupList groupList={groupData} />;
}

export const getServerSideProps = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const data = await prisma.group.findMany({
    include: {
      GroupUser: {
        where: {
          userID: session?.user?.id,
        },
      },
    },
  });

  return {
    props: { data },
  };
};
