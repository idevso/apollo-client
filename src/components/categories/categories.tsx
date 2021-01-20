import {useState} from "react";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { CategoryList, CategoryItem} from "../../styles";

const CategoriesList = gql`
  query GetAllCategories {
    categories
  }
`;



function Categories(): JSX.Element | null {
    const dispatch = useDispatch();
    const [activeCategory, setCategory] = useState("room");
    const { loading, error, data } = useQuery(CategoriesList);
    let categories: string[] = [];

    if (data){
        categories = [...data.categories];
    }

    function changeCategory(category: string) : void {
        if (activeCategory !== category){
            setCategory(category);
            dispatch({type : "setCategory", data : category});
        }
    }

    if (loading || error) return null;
    
    return (
        <CategoryList>

            {categories.map(item => {
                return (
                    <CategoryItem onClick={() => changeCategory(item) } key={item} active={ item === activeCategory }>
                        { item }
                    </CategoryItem>
                )
            })}

        </CategoryList>
    )
}

export default Categories;