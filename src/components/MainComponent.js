import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }


  render(){

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return(
      <div>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> 
             {/* we have to pass some props so we made inline function component for menu */}
            <Redirect to="/home" />
            {/* home is set to default */}
          </Switch>
          <Footer />
      </div>
    )
  }
}

export default Main;
