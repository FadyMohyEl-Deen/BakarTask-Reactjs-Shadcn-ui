import { useEffect, useState } from "react";
import Collapse from "./components/Collapsible";
import { CreditCard } from "./components/CreditCard";
import CardInfo from "./components/CardInformation";
import Buttons from "./components/Buttons";

function CardPage() {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await fetch(
          "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cardData) {
    return <div>No card data available</div>;
  }

  const logo =
    cardData.brand === "Visa"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
      : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";

  return (
    <>
      <div className="flex-col justify-center">
        <Collapse cardholderName={cardData.cardholderName} BrandLogo={logo} />
        <CreditCard
          cardholderName={cardData.cardholderName}
          last4={cardData.last4}
          expiryMonth={cardData.expiryMonth}
          expiryYear={cardData.expiryYear}
          brand={cardData.brand}
          BrandLogo={logo}
          cvc={cardData.cvc}
        />
        <CardInfo
          cardholderName={cardData.cardholderName}
          cvc={cardData.cvc}
          last4={cardData.last4}
          expiry={`${cardData.expiryMonth}/${cardData.expiryYear}`}
          brand={cardData.brand}
          brandLogo={logo}
        />
        <Buttons />
      </div>
    </>
  );
}

export default CardPage;
