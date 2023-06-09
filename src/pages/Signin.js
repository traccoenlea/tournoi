import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

const Signin = () => {
  const { signin, user } = useContext(UsersContext);

  const navigate = useNavigate();
  const validationSchema = yup.object({
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
      console.log("dans le try");
      clearErrors();
      await signin(values);
      navigate("/");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
  return (
    <div className="flex mauto">
      <form onSubmit={submit}>
        <h2 className="mb30">Connexion</h2>
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
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
