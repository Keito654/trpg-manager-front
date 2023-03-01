import { GroupJoin } from "features/groupJoin/join";
import prisma from "libs/initPrisma";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function GroupJoinPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <GroupJoin
      id={data.id}
      groupTitle={data.name}
      description={data.description}
    />
  );
}

// getServerSidePropsで、パスクエリからkey値を取得する。
// そのkey値と結びつくグループに、ユーザーを追加する。
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { key } = context.query;
  console.log(key);

  // if it is not exist key, throw 404 error
  if (!key) {
    return {
      notFound: true,
    };
  }

  const data = await prisma.group.findFirst({
    select: {
      id: true,
      name: true,
      description: true,
    },
    where: {
      shareKey: key as string,
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
