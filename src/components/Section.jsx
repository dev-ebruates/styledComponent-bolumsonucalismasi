import Article from "./Article";
import { StyledSection } from "./styled";

export default function Section(){


  const articles = [
    {title:"lorem ipsum dolor",
     src:"https://picsum.photos/id/237/1200/450",
     content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus perferendis, maxime ullam nemo rerum, nesciunt, voluptatibus rem est fugit temporibus magnam iste cum? Sint in necessitatibus velit totam?</p>`,
     link:'#',
    },
    {title:"lorem ipsum 2",
     src:"https://picsum.photos/id/1027/1200/450",
     content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus perferendis, maxime ullam nemo rerum, nesciunt, voluptatibus rem est fugit temporibus magnam iste cum? Sint in necessitatibus velit totam?</p>`,
     link:'#',
    }
  ]
  return <StyledSection>
  {
    articles.map((item, index) => <Article key={index} title={item.title} link={item.link} content={item.content}  img={item.src}/>)
  }
  </StyledSection>
}