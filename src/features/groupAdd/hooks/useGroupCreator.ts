import { yupResolver } from "@hookform/resolvers/yup";
import { useShareUrlConverter } from "libs/hooks/useShareUrlConverter";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  GroupRegistrationForm,
  groupRegistrationFormSchema,
} from "types/schema/groupRegistrationForm";

export const useGroupCreator = (shareKey: string) => {
  const { convertShareKeyToUrl } = useShareUrlConverter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupRegistrationForm>({
    defaultValues: {
      urlForJoin: convertShareKeyToUrl(shareKey),
    },
    resolver: yupResolver(groupRegistrationFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<GroupRegistrationForm> = async (data) => {
    // dataにあるurlForJoinは、http://から始まるURL
    // そのため、このhooksの引数として渡されたUUIDであるurlForJoinを使う

    const postBody = structuredClone(data);
    postBody.urlForJoin = shareKey;

    const res = await fetch("/api/createGroup", {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (json.ok) {
      void router.push("/");
    } else {
      alert("追加に失敗しました。もう一度やり直してください。");
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};
