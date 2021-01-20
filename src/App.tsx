import Categories from "./components/categories/categories";
import Message from "./components/message/message";
import { useSelector } from "react-redux";
import { Structure } from "./store/reducers";
import { useLazyQuery, gql } from '@apollo/client';
import { useDispatch } from "react-redux";
import {HeaderContainer, CategoriesContainer, HeaderText, MessageContainer, JokeButtonContainer, RequestJokeButton, RequestJokeButtonText } from "./styles"


const GETRANDOMJOKE = gql`
  query GetRandomJoke($category: String!){
    randomJoke(category: $category){
      value
    }
  }
`;


const App = (): JSX.Element => {

  const dispatch = useDispatch()
  const category: string = useSelector<Structure, Structure["currentCategory"]>((state) => state.currentCategory);
  let joke: string = "";

  const [
    getJoke, 
    { loading, data }
  ] = useLazyQuery(GETRANDOMJOKE, { variables : {category}, });


  if (!loading && data){
    joke = data.randomJoke.value;
    dispatch({type : "store", data : joke});
  }

  return (
    <div className="App">
      <HeaderContainer>
        <HeaderText>
          Categories
        </HeaderText>
      </HeaderContainer>

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>

      <MessageContainer>
        <Message joke={joke} />
      </MessageContainer>

      <JokeButtonContainer>
          <RequestJokeButton onClick={() => {
              if (category) { return getJoke()}
              else alert("please select a category")
              }}>

              <RequestJokeButtonText>
                Pop A Joke!
              </RequestJokeButtonText>
          </RequestJokeButton>
      </JokeButtonContainer>

    </div>
  );
}

export default App;
