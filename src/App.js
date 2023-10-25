import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Temp = () => {
  return <h1>Test</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route element={<Temp />} path="temp" />
      </Route>
    </Routes>
  );
};

export default App;
