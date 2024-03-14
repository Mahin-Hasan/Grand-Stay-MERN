import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    //overflow-x-auto gives the slider in small device
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category);
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {
                    categories.map(item => <CategoryBox
                        key={item.label} label={item.label} icon={item.icon} selected={category === item.label} />)
                }
                {/* selected={category === item.label} checking if item.label is equal to selected category  */}
            </div>
        </Container>
    );
};

export default Categories;