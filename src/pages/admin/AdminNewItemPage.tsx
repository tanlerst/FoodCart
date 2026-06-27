/* Admin New Item Page for adding new food items to the menu */
import { useEffect, useState } from "react";
import InformationCard from "../../components/admin/addItem/InformationCard";
import ItemImageCard from "../../components/admin/addItem/ItemImageCard";
import PricingCard from "../../components/admin/addItem/PricingCard";
import SaveItemButton from "../../components/admin/addItem/SaveItemButton";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { createItem } from "../../helpers/admin/createItem";
import { getCategories } from "../../helpers/admin/getCategories";
import type { CategoryOption } from "../../helpers/admin/getCategories";

export default function AdminNewItemPage() {
  // Change here
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !categoryId || !price.trim() || !image || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    const parsedPrice = Number(price);
    if (Number.isNaN(parsedPrice)) {
      alert("Please enter a valid price.");
      return;
    }

    const parsedTime = Number(time);
    if (Number.isNaN(parsedTime)) {
      alert("Please enter a valid time.");
      return;
    }

    try {
      setSubmitting(true);

      await createItem({
        name: name.trim(),
        description: description.trim(),
        price: parsedPrice,
        category: Number(categoryId),
        image,
        time: parsedTime,
      });

      alert("Item created successfully.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to create item.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side bar */}
      <AdminSideBar></AdminSideBar>

      <div className="min-h-screen bg-gray-50 px-5 py-6">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Item</h1>

          <p className="mt-2 text-gray-500">Create a new menu item for your restaurant.</p>
        </div>

        {/* Item details */}
        {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <InformationCard
            name={name}
            description={description}
            categoryId={categoryId}
            categories={categories}
            loadingCategories={loadingCategories}
            time={time}
            onNameChange={setName}
            onDescriptionChange={setDescription}
            onCategoryChange={setCategoryId}
            onTimeChange={setTime}
          />

          <PricingCard price={price} onPriceChange={setPrice} />

          <ItemImageCard image={image} onImageChange={setImage} />

          {/* Save and cancel buttons */}
          <div className="flex justify-end gap-4 pb-1">
            <SaveItemButton
              disabled={
                submitting ||
                loadingCategories ||
                !name.trim() ||
                !categoryId ||
                !price.trim() ||
                !image ||
                !time
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
