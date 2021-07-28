interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="productItem">
      {product.title}: <strong>R$ {product.price}</strong>
    </div>
  );
}
