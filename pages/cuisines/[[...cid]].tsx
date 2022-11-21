import { RecipeItem } from "../../components"
import { useRouter } from "next/router"

const Cuisine = () => {
    const rout = useRouter()
    const { cid } = rout.query
    console.log(cid);

    return (
        <div>
            <h1> Cuisine name: { cid } </h1>
        </div>
    )
}

export default Cuisine
