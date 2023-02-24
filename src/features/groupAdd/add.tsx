import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { CopyButton } from "components/elements/button/copyButton";
import { LabelText } from "components/elements/labelText";
import { supabase } from "libs/initSupabase";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  GroupRegistrationForm,
  groupRegistrationFormSchema,
} from "types/schema/groupRegistrationForm";
import { GroupModel } from "types/veiwModels";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    cancel: true;
  }
}

type Props = Pick<GroupModel, "urlForJoin">;

export const GroupAdd: FC<Props> = ({ urlForJoin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupRegistrationForm>({
    defaultValues: {
      urlForJoin: urlForJoin,
    },
    resolver: yupResolver(groupRegistrationFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<GroupRegistrationForm> = async (data) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      void router.replace("/login");

      return;
    }

    const postBody = structuredClone(data);
    postBody.createID = user.id;

    console.log(postBody);

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
      console.log(json);
      alert("追加に失敗しました。もう一度やり直してください。");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 8, mb: 10 }}>
        <Box>
          <LabelText>グループタイトル</LabelText>
          <TextField
            variant="outlined"
            placeholder="50文字まで"
            fullWidth
            required
            maxLength={50}
            {...register("groupTitle")}
            error={"groupTitle" in errors}
            helperText={errors.groupTitle?.message}
          />
        </Box>
        <Box>
          <LabelText>説明</LabelText>
          <TextField
            multiline
            rows={4}
            placeholder="100文字まで"
            maxLength={100}
            fullWidth
            {...register("description")}
            error={"description" in errors}
            helperText={errors.description?.message}
          />
        </Box>
        <Box>
          <LabelText>共有URL</LabelText>
          <TextField
            fullWidth
            InputProps={{ readOnly: true, endAdornment: <CopyButton /> }}
            {...register("urlForJoin")}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          完了
        </Button>
        <Button variant="contained" color="cancel" component={Link} href="/">
          戻る
        </Button>
      </Box>
    </>
  );
};
