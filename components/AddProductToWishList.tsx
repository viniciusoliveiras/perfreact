export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <span
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Deseja adicionar aos favoritos?{" "}
      <button
        onClick={() => {
          onAddToWishList();
          onRequestClose();
        }}
        style={{
          backgroundColor: "green",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        👍
      </button>
      <button
        onClick={() => onRequestClose()}
        style={{
          backgroundColor: "red",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        👎
      </button>
    </span>
  );
}
