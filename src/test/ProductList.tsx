import { useNavigate } from 'react-router-dom';
import { Fetcher } from '../api/fetch';
import { Product } from '../interface/product';

const fetcher = new Fetcher;

// Sample product data
const products: Product[] = await fetcher.fetchAllProduct();

const ProductList = () => {

    const navigate = useNavigate();

    const handleSeeDetailsClick = (productId: number) => {
        navigate(`/detail?product=${productId}`);
    }

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button data-product-id={product.id}>Add to Basket</button>
                    <button onClick={() => handleSeeDetailsClick(product.id)}>See Details</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;