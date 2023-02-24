import { GroupList } from "features/groupList/list";
import prisma from "libs/initPrisma";
import { supabase } from "libs/initSupabase";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <GroupList groupList={data} />;
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

  const groupData = data.map((x) => ({
    groupTitle: x.name,
    description: x.description,
  }));

  return {
    props: { data: groupData },
  };
};
