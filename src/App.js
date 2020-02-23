import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:1,
      subject: {
        title:'WEB',
        sub:'World Wide Web!',
      },
      welcome:{
        title:'Welcome',
        desc:'Hello, React!!',
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' },
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      var i=0;
      while(i<this.state.contents.length) {
        if(this.state.contents[i].id === this.state.selected_content_id){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i=i+1;        
      }  
    }
    return (
      <div className="App">
        Hello, React!
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangPage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){ 
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject title="React" sub="For Ui"></Subject>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id),
          })
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
