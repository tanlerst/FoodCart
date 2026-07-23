import DietaryOptionButton from "./OptionButton";
import { readRestrictions } from "../../../helpers/surprise/readRestrictions";
import { useEffect, useState } from "react";

type DietaryPreferencesProps = {
  dietaryPreference: string[];
  setDietaryPreference: (preferences: string[]) => void;
};

export default function DietaryPreferences({
  dietaryPreference,
  setDietaryPreference,
}: DietaryPreferencesProps) {
  const [restrictions, setRestrictions] = useState<string[]>([]);

  useEffect(() => {
    async function loadRestrictions() {
      try {
        const data = await readRestrictions();
        setRestrictions(["None", ...data]);
      } catch (error) {
        console.error(error);
      }
    }
    loadRestrictions();
  }, []);

  function handleOption(option: string) {
    if (option == "None") {
      setDietaryPreference(["None"]);
      return;
    }

    setDietaryPreference(
      dietaryPreference.includes(option)
        ? // keep every item except none
          dietaryPreference.filter((item) => item != option)
        : [...dietaryPreference.filter((item) => item != "None"), option],
    );
  }

  return (
    <section>
      <div className="mt-2"></div>
      <h2 className="mb-1 text-lg font-bold">Dietary Preferences</h2>

      <p className="mb-2 text-sm text-gray-500">Select all that apply</p>

      <div className="grid grid-cols-2 gap-2">
        {restrictions.map((option) => (
          <DietaryOptionButton
            key={option}
            option={option}
            isSelected={dietaryPreference.includes(option)}
            onSelect={() => handleOption(option)}
          />
        ))}
      </div>
    </section>
  );
}
