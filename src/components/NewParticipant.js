import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function NewParticipant({ name }) {
  const yupSchema = yup.object({
    name: yup.string().required("Ce champ est nécessaire"),
  });

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(yupSchema),
  });

  return (
    <div>
      <input type="text" id="name" name="name" />
      {errors?.name && <p>{errors.name.message}</p>}
    </div>
  );
}
