import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="mb-5 flex justify-center  w-[100%] py-2">
        <Tabs defaultValue="transactions">
          <TabsList className="gap-4">
            <TabsTrigger
              value="card"
              className="flex-1 w-40 hover:bg-gray-400 text-black"
              asChild>
              <Link to="/BakarTask-Reactjs-Shadcn-ui/card">Card</Link>
            </TabsTrigger>
            <TabsTrigger
              variant="none"
              value="Transactions"
              className="flex-1 w-40 hover:bg-gray-400 text-black"
              asChild>
              <Link to="/BakarTask-Reactjs-Shadcn-ui/transactions">
                Transactions
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </div>
  );
}

export default Nav;
