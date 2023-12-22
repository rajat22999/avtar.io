import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <p>Avtar.io </p>
      <Image src="/jam_menu.svg" width={40} height={40} alt="menu" />
    </div>
  );
};

export default Header;
