import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
     this.getAllPosts()
  }

  getAllPosts(){
    axios.get('/api/post').then(res=>{
      this.setState({posts: res.data})
    }).catch(err =>  alert('make sure you are logged in'))
  }

  render(){
    console.log('----------------------',this.state.posts, "----------------------------------")
    return (
      <div className="App">
        {this.state.posts.map(post=>(
          <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <br/>
          </div>
        ))}
      </div>
 );
}}

export default App;
