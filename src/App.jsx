import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import CountryDetail from "./pages/countryDetail/CountryDetail";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/:countryName" element={<CountryDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
