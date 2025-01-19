import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Buttons() {
  return (
    <div>
      <CardFooter className="flex flex-col gap-3">
        <Button
          variant="none"
          className="text-black w-full border-black border hover:scale-[101%] ease-in-out duration-300 transition-all">
          Freeze card
        </Button>
        <Button
          variant="none"
          className="text-black w-full border-black border hover:scale-[101%] ease-in-out duration-300 transition-all">
          Replace card
        </Button>
        <Button
          variant="none"
          className="text-black w-full border  bg-red-400 hover:bg-red-600 hover:scale-[101%] ease-in-out duration-300 transition-all">
          Cancel card
        </Button>
      </CardFooter>
    </div>
  );
}
