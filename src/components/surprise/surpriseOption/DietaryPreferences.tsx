/**
 *  @file DietaryPreferences.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the dietary preferences component for the surprise option page.
 *                It displays a list of dietary preference options for the user to select.
 */

import DietaryOptionButton from "./OptionButton";

type DietaryPreferencesProps = {
    dietaryPreference: string[];
    setDietaryPreference: (preferences: string[]) => void;
};

// hard-coded dietary preferences options

const dietaryOptions = ["None", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free"];

export default function DietaryPreferences({ dietaryPreference, setDietaryPreference: setDietaryPreference }: DietaryPreferencesProps) {

    function handleOption(option:string) {
      if (option == "None") {
        setDietaryPreference(["None"]);
        return;

      }

      setDietaryPreference(
        dietaryPreference.includes(option)
        // keep every item except none
          ? dietaryPreference.filter((item) => item != option)
          : [...dietaryPreference.filter((item) => item != "None"), option]
      )

    }

    return (
        <section>
            <div className="mt-2">

            </div>
            <h2 className="mb-1 text-lg font-bold">
                Dietary Preferences
            </h2>

      <p className="mb-2 text-sm text-gray-500">Select all that apply</p>

            <div className="grid grid-cols-2 gap-2">
                {dietaryOptions.map((option) => (
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
