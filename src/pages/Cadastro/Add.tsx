import { useForm } from "react-hook-form";
import { FaXbox } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>

      <h2 className="text-center font-bold text-2xl text-white">Cadastrar usuário</h2>

      <form
        onSubmit={handleSubmit(() => {})}
        className="flex flex-col justify-center items-center pt-6"
      >

        <span className="text-xs text-red-600 text-left">
          {errors.Name?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="text"
          {...register("Name", { required: "Campo obrigatorio", minLength: 3 })}
          placeholder="Nome do usuário"
        />

        <span className="text-xs text-red-600 text-left">
          {errors.Nickname?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="text"
          {...register("Nickname", {
            required: "Campo obrigatorio",
            minLength: 3,
            maxLength: {
              value: 12,
              message: "O maximo de caracteres é 12",
            },
          })}
          placeholder="Nickname para perfil"
        />

        <span className="text-xs text-red-600 text-left">
          {errors.Email?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="email"
          {...register("Email", { required: "Campo obrigatorio" })}
          placeholder="E-mail do usuário"
        />

        <span className="text-xs text-red-600 text-left">
          {errors.CPF?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="text"
          {...register("CPF", { required: "Campo obrigatorio", maxLength: 15 })}
          placeholder="CPF do usuário"
        />

        <span className="text-xs text-red-600 text-left">
          {errors.Password?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="password"
          {...register("Password", { required: "Campo obrigatorio" })}
          placeholder="Senha"
        />

        <span className="text-xs text-red-600 text-left">
          {errors.ConfirmdPassword?.message}
        </span>

        <input
          className="w-4/5 p-1 m-5 text-base rounded-xl"
          type="password"
          {...register("ConfirmdPassword", { required: "Campo obrigatorio" })}
          placeholder="Confirmar senha"
        />

        <input 
          className="border border-solid border-transparent text-bold text-lg text-white cursor-pointer p-2 w-1/3 transition ease-in-out delay-150 duration-700 hover:scale-110 hover:bg-neutral-100 hover:text-green-600 hover:rounded-xl"
          type="submit"
          value='Cadastrar'
        />
      </form>

    </>
  );
};

export default Add;
