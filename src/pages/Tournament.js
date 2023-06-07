import { useParams } from "react-router-dom";

export default function Tournament() {
  const params = useParams();
  const id_tour = parseInt(params.id_tour);

  //get the data from poules ou from elim
  return (
    <div>
      <h1>Dans la page tournament {id_tour}</h1>
    </div>
  );
}
