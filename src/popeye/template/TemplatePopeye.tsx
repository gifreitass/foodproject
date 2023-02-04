import { iGetRestaurants } from "../../allRestaurants/template/TemplateRestaurants"
import { iGetProducts } from "../../mcDonalds/templates/TemplateProducts"
import Header from "../organisms/Header"
import SectionRestaurant from "../organisms/SectionRestaurant"

const TemplatePopeye: React.FC<{ restaurant: iGetRestaurants | undefined, products: iGetProducts | undefined }> = (props) => {

    return (
        <>
            <Header />
            <main>
                {props.restaurant
                    ?
                    <SectionRestaurant restaurant={props.restaurant} />
                    :
                    <h1>Loading...</h1>
                }

            </main>
        </>
    )

}

export default TemplatePopeye