import { GroupAdd } from "features/groupAdd/add";
import { InferGetServerSidePropsType } from "next";
import shortUUID from "short-uuid";

export default function GroupAddPage({
  shareKey,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <GroupAdd shareKey={shareKey} />;
}

export const getServerSideProps = () => {
  return {
    props: {
      shareKey: shortUUID.generate().toString(),
    },
  };
};
