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
              path="/card"
              element={<CardPage />}
            />
            <Route
              path="/transactions"
              element={<TransactionsPage />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
