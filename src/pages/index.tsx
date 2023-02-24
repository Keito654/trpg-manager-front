import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GroupList } from "features/groupList/list";
import prisma from "libs/initPrisma";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <GroupList groupList={data} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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

  const data = await prisma.group.findMany({
    where: {
      GroupUser: {
        some: { userID: session?.user?.id },
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
