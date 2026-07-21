import { useState } from "react";
import InformationCard from "./InformationCard";
import ItemImageCard from "./ItemImageCard";
import PricingCard from "./PricingCard";
import SaveItemButton from "./SaveItemButton";
import type { CategoryOption } from "../../../helpers/admin/getCategories";

// curently declaring type here, can move to types if necessary
export type ItemFormValues = {
  name: string;
  description: string;
  categoryId: string;
  price: string;
  time: string;
  availability: string;
  image: File | null;
};

export type ItemFormSubmitData = {
  name: string;
  description: string;
  category: number;
  price: number;
  time: number;
  availability: string;
  image: File | null; // null in edit mode (keep existing image)
};

type ItemFormProps = {
  mode: "create" | "edit";
  initialValues?: Partial<ItemFormValues>; // make every property optional
  existingImageUrl?: string | null;
  // onSubmit: (data: ItemFormSubmitData)
  onSubmit: () => void;
};

const emptyValues: ItemFormValues = {
  name: "",
  description: "",
  categoryId: "",
  price: "",
  time: "",
  availability: "available",
  image: null,
};

export default function ItemForm({ mode, initialValues, existingImageUrl, onSubmit }: ItemFormProps) {
  const [values, setValues] = useState<ItemFormValues>({ ...emptyValues, ...initialValues });
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  function update() {
    // update the form values with the new value
  }

  const requiresNewImage = mode === "create" && !values.image;
  
  const isFormValid =
    values.name.trim() &&
    values.categoryId &&
    values.price.trim() &&
    values.time &&
    !requiresNewImage;

  function handleSubmit() {
    // submit the form
  }

  function handleNameChange() {

  }

  function handleDescriptionChange() {

  }

  function handleCategoryChange() {

  }

  function handleTimeChange() {

  }

  function handlePriceChange() {

  }

  function handleAvailabilityChange() {

  }

  function handleImageChange() {

  }



  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-5 pt-5">
      <InformationCard
        name={values.name}
        description={values.description}
        categoryId={values.categoryId}
        categories={categories}
        loadingCategories={loadingCategories}
        time={values.time}
        // change these
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onCategoryChange={handleCategoryChange}
        onTimeChange={handleTimeChange}
      />

      <PricingCard
        price={values.price}
        // change this
        onPriceChange={handlePriceChange}
        availability={values.availability}
        onAvailabilityChange={handleAvailabilityChange}
      />

      <ItemImageCard
        image={values.image}
        // change this
        onImageChange={handleImageChange}
        existingImageUrl={existingImageUrl}
      />

      <div className="flex justify-end gap-4 pb-1">
        <SaveItemButton disabled={submitting || loadingCategories || !isFormValid} />
      </div>
    </form>
  );
}