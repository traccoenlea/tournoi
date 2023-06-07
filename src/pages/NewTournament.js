import { addTournament } from "../apis/tournament";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function NewTournament() {
  const navigate = useNavigate();

  const yupSchema = yup.object({
    name: yup.string().required("Ce champ est nécessaire"),
    type: yup.string().required("Ce champ est nécessaire"),
  });

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      type: "",
    },
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      const response = await addTournament(values);
      console.log("response");
      console.log(response);
      const id_tour = response.insertId;
      console.log(id_tour);
      if (response !== 0) {
        console.log("on est ici");
        console.log(values.type);
        if (values.type == 1) {
          navigate(`/newEliminations/${id_tour}`);
        } else if (values.type == 2) {
          navigate(`/newPoules/${id_tour}`);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form className="flex flexc mauto tac" onSubmit={handleSubmit(submit)}>
        <div className="flex flexc mb30 maw mauto">
          <label>Nom du tournoi : </label>
          <input type="text" id="name" {...register("name")} />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>

        <div className="flex flexc mb30 maw mauto">
          <label>Type de de tournoi :</label>
          <select id="type" {...register("type")}>
            <option value="" disabled>
              Sélectionnez dans la liste ci-dessous
            </option>
            <option value={1}>Elimination directe</option>
            <option value={2}>Poules</option>
          </select>
          {errors?.type && <p>{errors.type.message}</p>}
        </div>

        <button className="btn" disabled={isSubmitting}>
          Ajouter le tournoi
        </button>
      </form>
    </div>
  );
}
