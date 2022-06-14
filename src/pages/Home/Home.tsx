import { Link } from "react-router-dom"
import { FaXbox } from 'react-icons/fa'

const Home = () => {
  return (
    <>

        <h2 className="text-center font-bold text-2xl text-white">Cadastro de acesso</h2>

        <FaXbox className="flex justify-center items-center w-28" />

        <form className="flex flex-col justify-center items-center pt-6">

        <input
            className="w-4/5 p-1 m-5 text-base rounded-xl"
            type="text"
            id="email"
            placeholder="Digite o seu E-mail de acesso"
            required
            autoComplete="off"
        />

        <input
            className="w-4/5 p-1 m-5 text-base rounded-xl"
            type="password"
            id="password"
            placeholder="Digite sua senha de acesso"
            required
        />
        
        <p className="py-3 text-sm">Não tem uma conta criada? <Link to='/add'><span className="text-lime-200">Crie sua conta aqui</span></Link></p>

        <button 
          className="border border-solid border-transparent text-bold text-lg text-white p-2 w-1/3 transition ease-in-out delay-150 duration-700 hover:scale-110 hover:bg-neutral-100 hover:text-green-600 hover:rounded-xl" 
          type="submit">
            Login
        </button>

        </form>
    </>
  )
}

export default Home