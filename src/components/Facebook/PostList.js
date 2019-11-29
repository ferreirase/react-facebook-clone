import React, {Component} from 'react';
import PostComponent from './Post';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://image.flaticon.com/icons/svg/145/145848.svg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: 'https://image.flaticon.com/icons/svg/145/145842.svg'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive, 80% do nosso time de dev's é composto por alunos do Bootcamp. Além disso, se vocẽ tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!(Sério, me chama mesmo, esse comentário é real)."
          },
          {
            id: 2,
            author: {
              name: "Anderson Raphael",
              avatar: 'https://image.flaticon.com/icons/svg/145/145846.svg'
            },
            content: "Adiciona essa galera do Bootcamp no Linkedin. Ajuda muito."
          },
        ]
      },
      
    ]
  };

  render(){
    const {posts} = this.state;

    return(
      <div className="postList">
        {
          posts.map(post => (
            <PostComponent key={post.id} {...post}/>
          ))
        }
      </div>
    )
  };
}

export default PostList;