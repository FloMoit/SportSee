import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex bg-black w-full max-h-[90px] p-4 flex-row shadow-md">
      <div className="max-w-[180px]">
        <img
          src={Logo}
          alt="Logo de la société SportSee"
          className="object-contain h-full"
        />
      </div>
      <ul className="flex flex-row self-center text-lg font-medium text-white xl:text-xl grow justify-evenly">
        <li className="p-4">Accueil</li>
        <li className="p-4">Profil</li>
        <li className="p-4">Réglage</li>
        <li className="p-4">Communauté</li>
      </ul>
    </header>
  );
}

export default Header;
