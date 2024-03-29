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
  try {
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
      select: {
        id: true,
        name: true,
        description: true,
      },
      where: {
        UserGroup: {
          some: { userId: session?.user?.id },
        },
      },
    });

    const groupData = data.map((x) => ({
      id: x.id,
      groupTitle: x.name,
      description: x.description,
    }));

    return {
      props: { data: groupData },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    await prisma.$disconnect();
  }
};
