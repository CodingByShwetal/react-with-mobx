import React, { Component } from "react";
import PropTypes from 'prop-types';
import './App.css';
import Textfield from "@material-ui/core/Textfield";
//import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {fetchMovies,filterMovieList} from "./actions/firstName";


const styles = theme => ({
  appContainer :{
    height : "80px",
    width : "500px",
    margin : "50px !important",
    padding : "10px",
    border : "1px solid black",
  },
  nameContainer :{
    height : "auto",
    width : "500px",
    margin : "50px !important",
    padding : "50px",
    align : "left",
    border : "1px solid black",
  },
  textfield : {
    marginLeft : "10px",
    border:"1px solid"
  },
  submitButton : {
    marginTop : "10px",
    color : "white",
    backgroundColor : "black"
  } ,
  deleteButton : {
    marginTop : "10px",
    marginLeft : "30px",
    color : "white",
    backgroundColor : "black"
  }  
});
class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      name : ""
    }
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  handleChange = name => event => {
    if(name === "name"){
    this.setState({name : event.target.value},
      ()=>{
        this.props.filterMovieList(this.state.name, this.props.nameList);
      });
    }
  }

  render(){
    const {classes} = this.props;
    const name = this.state.name;
    const nameList = this.state.name === "" ? this.props.nameList : this.props.uItems;  
    return (
      <div className="App"> 
          <div className={classes.nameContainer}>
            <Textfield
              field = "Serch Movie..."
              value = {name}
              className = {classes.textfield}
              onChange = {this.handleChange("name")}
            />
            {nameList.length > 0 ?
              <span>
                <br/><br/><b>List of web series</b><br/>
                <div style={{overflowX:"none",overflowY: "auto",borderBottom:"1px solid",marginTop : "30px",marginBottom : "30px",height:"400px","width":"450px"}}>
                  
                  {nameList.map((data,index) => 
                    <div key={index} style={{textAlign : "left",paddingLeft : "25px",border:"1px solid","height" : "25px","width":"410px"}}>
                      {data.name}
                    </div>
                  )}
                </div>
              </span>
            :null}
          </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  filterMovieList: PropTypes.func.isRequired,
  nameList: PropTypes.array.isRequired,  
};

const mapStateToProps = states => ({
  nameList : states.nameList.items,
  uItems : states.nameList.uItems,
});

export default connect(mapStateToProps,{fetchMovies,filterMovieList})(withStyles(styles)(App));