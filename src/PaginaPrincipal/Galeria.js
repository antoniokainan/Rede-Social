import React, { Component } from 'react';
import Post from './Post';

class Galeria extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
         );
    }
}
 
export default Galeria;