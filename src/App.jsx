import Header from "./components/header/Header";
import Hero from "./components/header/hero/Hero";
import css from './styles/App.module.scss';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
  </div>
};

export default App;