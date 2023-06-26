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
  // use state to know how many participants
  const [number, setNumber] = useState(0);

  const params = useParams();
  const id_tour = parseInt(params.id_tour);

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
    setErrorM(false);
    append({
      name: "",
    });
  }

  function deletePart(index) {
    remove(index);
  }

  function getNumber(e) {
    console.log(e);
    setNumber(e);
  }

  async function submit(values) {
    const participants = values.participants;
    console.log(participants.length);

    try {
      clearErrors();
      //checking if the number of participants matches the number of participants inputs added
      if (number == participants.length) {
        setErrorM(false);
        await addParticipant(participants, id_tour);
        await addElim(number, id_tour);
        navigate("/");
      } else {
        setErrorM(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flexc mauto">
      <h1>Ajouter les participants de votre tournoi à éliminations directes</h1>

      <h3>
        Le nombre de participants ne peut être qu'un multiple de 4 pour avoir
        des faces à faces directs
      </h3>

      <form className="flex flexc" onSubmit={handleSubmit(submit)}>
        <div className="flex flexc mauto mb30">
          <label htmlFor="number">Nombre de participants : </label>
          <input
            type="number"
            id="number"
            name="number"
            step={4}
            min={4}
            {...register("number")}
            onBlur={(e) => getNumber(e.target.value)}
          />
          {errors?.number && <p>{errors.number.message}</p>}
        </div>
        <div className="flex flexc mauto mb30">
          <h4>Les noms des participants :</h4>
          <button onClick={addPart} className="smallBtn">
            Ajouter un participant
          </button>

          <ol>
            {fields.map((p, i) => (
              <div className="participantsList" key={i}>
                <div className="flex flexstart">
                  <li>
                    <input
                      {...register(`participants[${i}].name`)}
                      type="text"
                      className="flex jcc flexc mauto"
                    />
                  </li>
                  <button className="smallBtn" onClick={() => deletePart(i)}>
                    Supprimer
                  </button>
                </div>
                <div className="maw tal mb30">
                  {errors.participants?.length &&
                    errors.participants[i]?.name && (
                      <div className="mt10">
                        {errors.participants[i].name.message}
                      </div>
                    )}
                </div>
              </div>
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
