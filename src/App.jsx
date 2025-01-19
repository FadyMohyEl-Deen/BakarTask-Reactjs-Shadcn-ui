import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardPage from "./CardPage";
import TransactionsPage from "./TransactionInfoPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="flex justify-center py-10">
          <Routes>
            <Route
              path="/BakarTask-Reactjs-Shadcn-ui/card"
              element={<CardPage />}
            />
            <Route
              path="/BakarTask-Reactjs-Shadcn-ui/transactions"
              element={<TransactionsPage />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
