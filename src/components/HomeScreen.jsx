import React, { Component } from 'react'
import Title from './Title';
import Header from './Header';
import Container from './Container';
import Calender from './Calender';
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:3001/`
})

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toDos: [],
      date:'',
      
    };
  }

  componentDidMount(){
    this.getToDo();
  }

  handleValueChange = (newValue) => {
    this.setState({ toDos: newValue });
  
  }



  // deleteItem =(item) =>{
  //   let newToDos=this.state.toDos.filter((toDo) =>{
  //     return toDo !== item;
  //   });
  //   // console.log("hello ==",item);
  //   console.log(newToDos,'-----------');
  //   this.setState({toDos:newToDos});
  
  // }


  getToDo = async() =>{
    let data = await api.get('toDos')
    this.setState({toDos:data.data})
    console.log(data.data,'-------')
  }


  deleteItem = async(id) =>{
    let data = await api.delete(`toDos/${id}`)
    this.getToDo();
  }



    // slectedDate=()=>{

    // }
  // editItem=(oldValue,newValue) =>{
  //   let newToDos =this.state.toDos.map((toDo) =>{
  //     if(toDo===oldValue){
  //       return newValue;
  //     }else{
  //       return toDo;
  //     }

  //   });

  //   this.setState({toDos:newToDos});

  // }


  render() {
    console.log(this.state.toDos,'yo to do ho')
    return (
      <div className="to-do">

        <Title />
        <Header
          handleAddItem={this.handleValueChange}
        />
        <Container
          toDos={this.state.toDos}
          deleteItem ={this.deleteItem}
          // editItem={this.editItem}
        />
        {/* <Try /> */}
      </div>
    )
  }
}
