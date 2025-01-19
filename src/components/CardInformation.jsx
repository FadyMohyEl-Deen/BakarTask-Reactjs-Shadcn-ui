import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export default function CardInfo({
  cardholderName,
  last4,
  expiry,
  brand,
  brandLogo,
  cvc,
}) {
  const [cvcVisible, setCvcVisible] = useState(false);

  const toggleCvcVisibility = () => {
    setCvcVisible((prevState) => !prevState);
  };

  return (
    <Card className="max-w-lg w-[410px] mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-black">
          Card Information:
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Card number</span>
          <span className="font-small text-black">
            •••• •••• •••• {last4}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-black">CVV</span>
          <div className="flex items-center">
            <span className="font-small text-black">
              <button
                onClick={toggleCvcVisibility}
                className="flex items-center">
                {cvcVisible ? (
                  cvc
                ) : (
                  <FaRegEye className="fill-gray-500  mt-1" />
                )}
              </button>
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Expiration</span>
          <span className="font-small text-black">{expiry}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Brand</span>
          <div className="flex items-center ">
            <p className="text-black font-small mr-1 ">{brand}</p>
            <img src={brandLogo} alt={`${brand} logo`} className=" h-3 w-10" />
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Status</span>
          <span className="font-medium bg-green-500 text-black px-2 rounded-sm">
            Active
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Cardholder</span>
          <span className="font-small text-black">{cardholderName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Card type</span>
          <span className="font-small text-black">Virtual</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">Created at</span>
          <span className="font-small text-black">Nov 15, 2023, 9:32 PM</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-black">
            Billing address
          </span>
          <span className="font-small text-right text-black">
            123M Street
            <br />
            San Francisco, CA, 9411, US
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
