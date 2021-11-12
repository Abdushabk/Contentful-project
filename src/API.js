import React from "react";
import "./API.css";
import  client  from "./client";
import Posts from "./Posts";

class Api extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      console.log(response)
      this.setState({articles: response.items})
    })
    .catch(console.error)
  }

 render() {
   return(
     <div className="App">
       <div className="container">
         <header>
           <div className="wrapper">
             <span> React and Contentful</span>
           </div>
         </header>
         <main>
           <div className="wrapper">
             <Posts posts={this.state.articles}/>
           </div>
         </main>
       </div>
     </div>
   )
 }
};

export default Api;
