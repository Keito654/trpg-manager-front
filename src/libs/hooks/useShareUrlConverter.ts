import urlJoin from "url-join";

export const useShareUrlConverter = () => {
  const convertShareKeyToUrl = (shareKey: string) => {
    return urlJoin(
      process.env.NEXT_PUBLIC_URL_BASE as string,
      "group/join",
      shareKey
    );
  };

  return { convertShareKeyToUrl };
};
