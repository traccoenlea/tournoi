import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser } from "../apis/users";

const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Ce champ doit être saisi")
      .min(2, "Au moins deux lettres"),
    email: yup
      .string()
      .required("Ce champ doit être saisi")
      .email("Email non valide"),
    password: yup
      .string()
      .required("Ce champ doit être saisi")
      .min(6, "Le mot de passe doit contenir 6 caractères min."),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      await createUser(values);
      navigate("/signin");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
  return (
    <div className="flex flexc mauto">
      <form onSubmit={submit}>
        <h2 className="mb30">Inscription</h2>
        <div className="flex flexc mb30">
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" {...register("name")} />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="flex flexc mb30">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" {...register("email")} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="flex flexc mb30">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" {...register("password")} />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        {errors.generic && (
          <p className="form-error">{errors.generic.message}</p>
        )}
        <div>
          <button disabled={isSubmitting} className="btn btn-primary">
            Inscription
          </button>
        </div>
      </form>

      <div className="mt30">
        <h3>
          Déjà inscrit ? <NavLink to="/signin">Se connecter</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default Signup;
