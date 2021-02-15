import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ListContainer from "./container/ListContainerCard/ListContainer";
import SearchListContainer from "./container/ListContainerCard/SearchListContainer";
import CategoryListContainer from "./container/ListContainerCard/CategoryListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel />
      <Switch>
        <Route exact path='/'>
          <ListContainer />
        </Route>
        <Route exact path='/categories/:keyword'>
          <CategoryListContainer />
        </Route>
        <Route exact path='/search/:searchWord'>
          <SearchListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
