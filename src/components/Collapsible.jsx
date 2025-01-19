import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Collapse({ cardholderName, BrandLogo }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="text-center items-center flex justify-center">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[380px] space-y-2">
        <div className="border border-black rounded-md flex items-center justify-between space-x-4 px-4">
          <img src={BrandLogo} alt="Brand Logo" className="w-10 h-3" />
          <h4 className="text-sm font-semibold">{cardholderName || "N/A"}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="" size="sm" className="p-0">
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <a href="/">
            <p className="font-normal text-gray-600 hover:text-black">Card 1</p>
          </a>
          <a href="/">
            <p className="font-normal text-gray-600 hover:text-black">Card 2</p>
          </a>
          <a href="/">
            <p className="font-normal text-gray-600 hover:text-black">Card 3</p>
          </a>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
