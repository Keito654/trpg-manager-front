import { GroupAdd } from "features/groupAdd/add";
import { InferGetServerSidePropsType } from "next";
import shortUUID from "short-uuid";
import urlJoin from "url-join";

export default function GroupAddPage({
  urlForJoin,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <GroupAdd urlForJoin={urlForJoin} />;
}

export const getServerSideProps = () => {
  const urlForJoin = urlJoin(
    process.env.NEXT_PUBLIC_URL_BASE as string,
    "group/join",
    shortUUID.generate().toString()
  );

  return {
    props: {
      urlForJoin: urlForJoin,
    },
  };
};
