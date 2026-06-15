type clearCartButtonProps = {
  clearCart: () => void;
};

export default function ClearCartButton({ clearCart }: clearCartButtonProps) {
  return <button onClick={clearCart}></button>;
}
