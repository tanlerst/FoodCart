type OrderPaymentSummaryProps = {
    subtotal: number;
    serviceFee: number;
    total: number;
};

export default function OrderPaymentSummary({
    subtotal,
    serviceFee,
    total,
}: OrderPaymentSummaryProps) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
        <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
                Order Summary
            </h2>
        </div>

        <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
            <SummaryItem 
                label="Subtotal" 
                value={subtotal} 
            />
            
            <SummaryItem 
                label="SST" 
                value={serviceFee} 
            />

            <div>
                <p className="text-sm font-semibold text-gray-700">
                    Total
                </p>
                
                <p className="mt-2 text-3xl font-bold text-orange-600">
                    ${total.toFixed(2)}
                </p>
            </div>
        </div>
    </div>
  );
}

// Summary Item for order summary under user order page

type SummaryItemProps = {
  label: string;
  value: number;
};

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <div>
        <p className="text-sm text-gray-500">
            {label}
        </p>
        
        <p className="mt-2 text-lg font-medium text-gray-900">
            ${value.toFixed(2)}
        </p>
    </div>
  );
}