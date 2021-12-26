
import React, { Component } from 'react';
import './styles.scss';

class Contact extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Add Your details',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
        <section>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">We are ever appreciated to accept to all your inquiries in order to give a valuable service and make your experience a smooth one from starting to end. Feel free to contact us via the information section to clarify any concerns and leave your feedback regarding your stay at our Reserve Air!</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:"50px"}}></i>                      
                <div>077-6808389</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:"50px"}}></i>
                <br/>
                <a className="d-block" href="mailto:hashirhasmy111@gmail.com">hashirhasmy111@gmail.com</a>
            </div>
        </div>
    </div>  
    
      <div className="marge">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
      </section>
    );
  }
}

export default Contact;