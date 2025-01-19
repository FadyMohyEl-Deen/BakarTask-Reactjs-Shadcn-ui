import { useState, useEffect } from "react";
import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        "https://678c4b1ff067bf9e24e70f5c.mockapi.io/TransactionData"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTransactions(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } 
  };

  const getStatusColor = (status) => {
    const colors = {
      succeeded: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      canceled: "bg-gray-100 text-gray-800",
      failed: "bg-red-100 text-red-800",
      refunded: "bg-blue-100 text-blue-800",
      disputed: "bg-purple-100 text-purple-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return <div className="container mx-auto py-6">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-6">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Tabs defaultValue="transactions">
            <TabsList className="gap-2">
              <TabsTrigger
                variant="none"
                value="transactions"
                className="flex-1">
                Transactions
              </TabsTrigger>
              <TabsTrigger value="issued-cards" className="flex-1">
                Issued cards
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex gap-2">
          <Button variant="none" size="sm" className="hover:bg-gray-200">
            <Download className=" h-4 w-4 " />
          </Button>
          <Button variant="none" size="sm" className="hover:bg-gray-200">
            <Filter className=" h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border md:w-[100%] bg-gray-100">
        <Table className="flex-col justify-between ">
          <TableHeader>
            <TableRow>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Cardholder</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {parseFloat(transaction.amount).toFixed(2)}
                </TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.cardholder}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium capitalize ${getStatusColor(
                      transaction.status
                    )}`}>
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>{transaction.created}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>
          Viewing 1-{transactions.length} of {transactions.length} results
        </span>
        <div className="flex gap-3">
          <Button
            variant="none"
            size="sm"
            className=" text-black hover:bg-gray-200 w-20 ">
            Previous
          </Button>
          <Button
            variant="none"
            size="sm"
            className="text-black hover:bg-gray-200 w-20">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
