import React, { Component } from 'react';
import { connect } from "react-redux";
import { register } from "./../../actions/register.action"



class Register extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       password:""
    }
  }

  showError = ()=>{
    return (
      <div className="alert alert-danger alert-dismissible">
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect information
    </div>
    )
  }

  
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>มีสองปุ่มเลือกดีๆอะ</b>
          </a>
        </div>
        {/* /.login-logo */}
        <div 
        style={{background: "whitesmoke", borderRadius: 10}}
        className="login-box-body">
          <form>
              {/* Ternery condition */}
            {this.props.registerReducer.isError ? this.showError() : null }
            {/* Register */}
            <div className="row">
              <div className="col-xs-6">
                <button
                  onClick={(e)=>
                    {
                      e.preventDefault()
                      alert('หวัดดีเจ๊ !!!!!!!!!')
                    }
                    }
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  น่ารักนะปุ่มนี้
                </button>
              </div>
              <div className="col-xs-6">
                <button
                  onClick={(e)=>
                    {
                      e.preventDefault()
                      alert('คิดถึงนะเจ้าอ้วน')
                    }
                    }
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  กดเส่ะ รออะไร
                </button>
              </div>              
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}


const mapStateToProps = ({registerReducer}) => ({ registerReducer })

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)