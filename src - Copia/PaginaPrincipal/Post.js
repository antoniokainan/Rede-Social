import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="post">
                <h4>Usuario</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl nunc. 
                    Aenean maximus mattis est. Phasellus tristique facilisis mauris, hendrerit feugiat 
                    tortor luctus nec. Fusce convallis convallis consequat. Etiam imperdiet, enim quis
                    sagittis rutrum, metus dolor lacinia elit, non consequat augue lectus iaculis ante. 
                    Mauris lacinia cursus mattis. Proin facilisis et ligula ut dictum.</span>
            </div>
        );
    }
}
 
export default Post;