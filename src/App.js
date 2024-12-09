import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import ActivitiesPage from "./components/ActivitiesPage";
import { Provider } from "react-redux";
import store from "./store";
import ChallengePage from "./components/ChallengePage";
import AboutUsPage from "./components/AboutUsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
