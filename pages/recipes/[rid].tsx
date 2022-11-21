import { RecipeItem } from "../../components"
import { useRouter } from "next/router"

const Recipe = () => {
    const rout = useRouter()
    const { rid } = rout.query
    console.log(rid);

    return (
        <div>
            <h1> Recipe name: { rid } </h1>
            <RecipeItem />
        </div>
    )
}
export default Recipe