type MarkOrderCompleteButtonProps = {
    onClick: () => void;
};

export default function MarkOrderCompleteButton({
    onClick,
}: MarkOrderCompleteButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
        >
            Mark Order Complete
        </button>
    );
}