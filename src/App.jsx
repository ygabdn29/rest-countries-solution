import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import CountryDetail from "./pages/countryDetail/CountryDetail";
import Navigation from "./components/navigation/Navigation";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/:countryName" element={<CountryDetail />}></Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
