import React, { Component } from 'react';
import './Post.css'
import Perfil from './user-icon.svg';

class Post extends Component {
    state = { 
    likes: this.props.qtdLikes,
    }

    incrementarClick = () =>{
        this.setState({likes : this.state.likes + 1})
    }

    foiClicado_ = () =>{
        this.incrementarClick();
        console.log( this.props.id )
    }

    
    
    render() { 
        return ( 
            <div className="post">
                
                <div className="topo">
                    <span><img src={Perfil} width="30px" height="30px"/></span>
                    <h4>{this.props.nomePessoa}</h4>
                </div>
                
                <div>
                    <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl nunc. 
                    Aenean maximus mattis est. Phasellus tristique facilisis mauris, hendrerit feugiat 
                    tortor luctus nec. Fusce convallis convallis consequat. Etiam imperdiet, enim quis
                    sagittis rutrum, metus dolor lacinia elit, non consequat augue lectus iaculis ante. 
                    Mauris lacinia cursus mattis. Proin facilisis et ligula ut dictum.</a>
                </div>
                
                <div className="acoes">
                    <a>{this.state.likes} </a>
                    <a onClick={this.foiClicado_} id="botaoLike">Like</a>
                </div>
            </div>
        );
    }
}
 
export default Post;