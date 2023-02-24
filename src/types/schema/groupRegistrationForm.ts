import * as yup from "yup";
import type { InferType } from "yup";

export const groupRegistrationFormSchema = yup.object({
  groupTitle: yup
    .string()
    .required("グループタイトルは必須です。")
    .max(50, "50文字以内で入力してください。"),
  description: yup.string().max(100, "100文字以内で入力してください。"),
  urlForJoin: yup.string().required(),
  createID: yup.string(),
});

export type GroupRegistrationForm = InferType<
  typeof groupRegistrationFormSchema
>;
