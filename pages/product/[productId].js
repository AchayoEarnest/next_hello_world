import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter()
    const productId = router.query.productId
    return(
        <h>The specified product id is: {productId}</h>
    )
}

export default ProductDetails;