/* Food recommendation skip card in red (x) */

type SkipIconProps = {
    onSkip: () => void;
};

export default function SkipIcon({ onSkip }: SkipIconProps) {
    return (
        <button
            type="button"
            onClick={onSkip}
            className="flex h-25 w-25 items-center justify-center rounded-full bg-white text-rose-500 text-5xl font-bold"
        >
            x
        </button>
    );
}