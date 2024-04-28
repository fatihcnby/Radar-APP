import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, isError, flights } = useSelector((store) => store.flight);

  return (
    <header>
      <div>
        <img src="/logo1.png" alt="" />
        <h3>Flight Radar 24</h3>
      </div>
      <p>
        {isLoading
          ? "Uçuş Bilgileri Toplanıyor..."
          : isError
          ? "Üzgünüz Bir Hata Oluştu"
          : "Belirtilen Koordinatlarda " +
            flights.length +
            " Uçuş Kaydı Bulundu"}
      </p>
    </header>
  );
};

export default Header;
