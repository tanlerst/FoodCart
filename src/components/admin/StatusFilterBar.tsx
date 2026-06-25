/* Status Filter Bar component for filtering, ie. status, date */
import FilterSelect from "../common/FilterSelect"

type StatusFilterBarProps = {
    status: string;
    onChange: (value: string) => void
};

export default function StatusFilter({
    status,
    onChange,

}: StatusFilterBarProps) {

    const statusOption = [
        { label: "All Status", value: "all" },
        { label: "Preparing", value: "preparing"},
        { label: "Completed", value: "completed"},
        { label: "Cancelled", value: "cancelled"}
    ];

    return (
        <div className="flex gap-6 mb-6">   
            <FilterSelect
                value={status}
                options={statusOption}
                onChange={onChange}
            >
            </FilterSelect>
        </div>
    );
}
