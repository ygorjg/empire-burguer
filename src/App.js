import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/global";
import "../src/styles/fonts.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
