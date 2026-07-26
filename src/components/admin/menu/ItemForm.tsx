import { useEffect, useState } from "react";
import InformationCard from "./InformationCard";
import ItemImageCard from "./ItemImageCard";
import DietaryPreferencesCard from "./DietaryPreferencesCard";
import PricingCard from "./PricingCard";
import SaveItemButton from "./SaveItemButton";
import CancelButton from "./CancelButton";

import type { CategoryOption } from "../../../helpers/admin/getCategories";
import { getCategories } from "../../../helpers/admin/getCategories";
import { useNavigate } from "react-router";

export type ItemFormValues = {
  name: string;
  description: string;
  categoryId: string;
  price: string;
  time: string;
  availability: string;
  recommended: boolean;
  dietaryPreferences: number[];
  image: File | null;
};

export type ItemFormSubmitData = {
  name: string;
  description: string;
  category: number;
  price: number;
  time: number;
  availability: boolean;
  recommended: boolean;
  dietaryPreferences: number[];
  image: File | null; // null in edit mode (keep existing image)
};

type ItemFormProps = {
  mode: "create" | "edit";
  initialValues?: Partial<ItemFormValues>;
  existingImageUrl?: string | null;
  onSubmit: (data: ItemFormSubmitData) => Promise<void>;
};

const emptyValues: ItemFormValues = {
  name: "",
  description: "",
  categoryId: "",
  price: "",
  time: "",
  availability: "available",
  recommended: false,
  dietaryPreferences: [],
  image: null,
};

export default function ItemForm({
  mode,
  initialValues,
  existingImageUrl,
  onSubmit,
}: ItemFormProps) {
  const [values, setValues] = useState<ItemFormValues>({ ...emptyValues, ...initialValues });
  const [dietaryPreferences, setDietaryPreferences] = useState<number[]>(
    initialValues?.dietaryPreferences ?? [],
  );
  const [recommended, setRecommended] = useState<boolean>(initialValues?.recommended ?? false);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingCategories(false);
      }
    }
    loadCategories();
  }, []);

  function update(field: keyof ItemFormValues, value: ItemFormValues[keyof ItemFormValues]) {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const requiresNewImage = mode === "create" && !values.image;

  const isFormValid =
    values.name.trim() &&
    values.categoryId.trim() &&
    values.price.trim() &&
    values.time.trim() &&
    !requiresNewImage;

  async function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (!isFormValid) {
      return;
    }
    setSubmitting(true);
    try {
      await onSubmit({
        name: values.name.trim(),
        description: values.description.trim(),
        category: Number(values.categoryId),
        price: Number(values.price),
        time: Number(values.time),
        availability: values.availability === "available",
        image: values.image,
        recommended,
        dietaryPreferences,
      });
    } finally {
      setSubmitting(false);
    }
  }

  function handleNameChange(value: string) {
    update("name", value);
  }

  function handleDescriptionChange(value: string) {
    update("description", value);
  }

  function handleCategoryChange(value: string) {
    update("categoryId", value);
  }

  function handleTimeChange(value: string) {
    update("time", value);
  }

  function handlePriceChange(value: string) {
    update("price", value);
  }

  function handleAvailabilityChange(value: string) {
    update("availability", value);
  }

  function handleImageChange(file: File | null) {
    update("image", file);
  }

  function handleCancel() {
    navigate("/adminmenu");
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
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onCategoryChange={handleCategoryChange}
        onTimeChange={handleTimeChange}
      />

      <PricingCard
        price={values.price}
        onPriceChange={handlePriceChange}
        availability={values.availability}
        onAvailabilityChange={handleAvailabilityChange}
        recommended={recommended}
        onRecommendedChange={setRecommended}
      />

      <DietaryPreferencesCard selected={dietaryPreferences} onChange={setDietaryPreferences} />

      <ItemImageCard
        image={values.image}
        onImageChange={handleImageChange}
        existingImageUrl={existingImageUrl}
      />

      <div className="flex justify-end gap-4 pb-1">
        <CancelButton onCancel={handleCancel} />
        <SaveItemButton disabled={submitting || loadingCategories || !isFormValid} />
      </div>
    </form>
  );
}
