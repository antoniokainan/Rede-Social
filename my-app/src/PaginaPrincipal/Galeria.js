import React, { Component } from 'react';
import Post from './Post';

class Galeria extends Component {
    state = {
        posts: [
            {
                id:"1",
                nomePessoa:"Joao",
                qtdLikes: 1
            },
            {
                id:"2",
                nomePessoa:"Tiago",
                qtdLikes: 2
            },
            {
                id:"3",
                nomePessoa:"Camila",
                qtdLikes: 3
            },
        ]
    }
   
    render() { 
        return ( 
            <div className="galeria">
                {this.state.posts.map((posts) => (<Post 
                        id={posts.id} 
                        nomePessoa={posts.nomePessoa}
                        qtdLikes={posts.qtdLikes}>
                        </Post>)
                )}
            </div>
         );
    }
}
 
export default Galeria;