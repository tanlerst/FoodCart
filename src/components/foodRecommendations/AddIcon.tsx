/* Food recommendation add icon in green (tick) */


type AddIconProps = {
    onAdd: () => void;
};

export default function AddIcon({ onAdd }: AddIconProps) {
    return (
        <button
            type="button"
            onClick={onAdd}
            className="flex h-25 w-25 items-center justify-center rounded-full bg-white text-green-500 text-5xl font-bold"
        >
            +
        </button>
    );
}