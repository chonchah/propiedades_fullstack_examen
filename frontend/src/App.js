import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Page404 from "./Pages/Page404";
import PropertyForm from "./Components/Properties/Form";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path="/" />
        <Route element={<PropertyForm/>} path="/property/create" />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
