import { useRouter } from "next/router"



const Product = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h1>The product id is {productId}</h1>
    )
}
export default Product