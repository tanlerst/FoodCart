type ConfirmSurpriseTotalCardProps = {
  amount: number;
  budget: number;
};

export default function ConfirmSurpriseTotalCard({
  amount,
  budget,
}: ConfirmSurpriseTotalCardProps) {
  return (
    <section className="mt-6 rounded-3xl bg-orange-100 px-6 py-7">
      <p className="text-lg font-bold text-gray-950">Total Amount</p>

      <p className="mt-2 text-4xl font-bold tracking-tight text-orange-500">
        Up to ${amount * budget}
      </p>
    </section>
  );
}
