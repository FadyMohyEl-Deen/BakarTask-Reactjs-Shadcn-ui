import { Card, CardContent } from "@/components/ui/card";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export function CreditCard({
  cardholderName,
  last4,
  expiryMonth,
  expiryYear,
  brand,
  BrandLogo,
  cvc,
}) {
  const backgroundImage = "https://i.imgur.com/kGkSg1v.png";

  const [cvcVisible, setCvcVisible] = useState(false);

  const toggleCvcVisibility = () => {
    setCvcVisible((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center mt-5 items-center">
      <Card
        className="w-96 h-56 bg-cover bg-center rounded-xl transition-transform hover:scale-[102%]"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <CardContent className="relative text-white py-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{cardholderName}</h2>
            </div>
            <img src={BrandLogo} alt={`${brand} Logo`} className="w-12" />
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-medium tracking-widest">
              **** **** **** {last4}
            </h2>
          </div>

          <div className="mt-8 flex justify-between text-sm">
            <div>
              <p className="text-start">Cardholder</p>
              <p className="font-medium">{cardholderName}</p>
            </div>
            <div>
              <p className="font-light text-start">Expires</p>
              <p className="font-medium">
                {expiryMonth}/{expiryYear}
              </p>
            </div>
            <div>
              <p className="font-light">CVC</p>
              <button
                onClick={toggleCvcVisibility}
                className="flex items-center font-medium">
                {cvcVisible ? cvc : <FaRegEye className="ml-1.5 mt-1" />}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
