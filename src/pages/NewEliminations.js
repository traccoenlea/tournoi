import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState, Fragment } from "react";
import { addParticipant } from "../apis/participant";
import { addElim } from "../apis/eliminitation";

export default function NewEliminations() {
  const navigate = useNavigate();
  const [errorM, setErrorM] = useState(false);
  const [number, setNumber] = useState(0);

  const params = useParams();
  const id_tour = parseInt(params.id_tour);
  console.log(id_tour);

  const yupSchema = yup.object({
    number: yup
      .number()
      .required("Entrez le nombre de participants svp")
      .min(4)
      .max(40)
      .typeError("Entrez le nombre de participants svp"),
    participants: yup.array().of(
      yup.object({
        name: yup.string().required("Ce champ ne peut être vide"),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      number: "",
      participants: [],
    },
    resolver: yupResolver(yupSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "participants",
    control,
  });

  function addPart() {
    append({
      name: "",
    });
  }

  function deletePart(index) {
    remove(index);
  }

  async function submit(values) {
    setNumber(values.number);
    const participants = values.participants;
    try {
      clearErrors();

      console.log(participants.length);
      if (number === participants.length) {
        const response = await addParticipant(participants, id_tour);
        const elim = await addElim(number, id_tour);
        // const randomPoules = await addPoule(number, id_tour);
        navigate("/");
      } else {
        setErrorM(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Ajouter les participants de votre tournoi à éliminations directes</h1>

      <h3>
        Le nombre de participants ne peut être qu'un multiple de 2 pour avoir
        des faces à faces directs
      </h3>

      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="number">Nombre de participants : </label>
        <input
          type="number"
          id="number"
          name="number"
          step={2}
          min={4}
          {...register("number")}
        />
        {errors?.number && <p>{errors.number.message}</p>}
        <div>
          Les noms des participants :
          <button onClick={addPart}>Ajouter un participant</button>
          <ol>
            {fields.map((p, i) => (
              <Fragment key={i}>
                <li>
                  <input {...register(`participants[${i}].name`)} type="text" />
                  <button onClick={() => deletePart(i)}>Supprimer</button>
                </li>
                {errors.participants?.length &&
                  errors.participants[i]?.name && (
                    <p>{errors.participants[i].name.message}</p>
                  )}
              </Fragment>
            ))}
          </ol>
        </div>

        {errorM ? <p>Veuillez entrer {number} participants svp</p> : ""}

        <button className="btn" disabled={isSubmitting}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}
