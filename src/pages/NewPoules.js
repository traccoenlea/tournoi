import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function NewPoules() {
  const [inputs, setInputs] = useState(0);
  const yupSchema = yup.object({
    number: yup
      .number()
      .required("Entrez le nombre de participants svp")
      .min(4)
      .max(40)
      .typeError("Entrez le nombre de participants svp"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      number: "",
    },
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
  }

  return (
    <div>
      <h1>Ajouter les participants de votre tournoi à poules</h1>

      <h3>
        Le nombre de participants ne peut être qu'un multiple de 4 pour faire
        des poules de 4
      </h3>

      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="number">Nombre de participants : </label>
        {/* <input type="number" id="number" name="number" step={4} /> */}
        <input type="text" id="number" name="number" />
        {errors?.number && <p>{errors.number.message}</p>}

        <button className="btn" disabled={isSubmitting}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}
