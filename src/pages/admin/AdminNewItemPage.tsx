/* Admin New Item Page for adding new food items to the menu */
import { useEffect, useState } from "react";
import InformationCard from "../../components/admin/menu/InformationCard";
import ItemImageCard from "../../components/admin/menu/ItemImageCard";
import PricingCard from "../../components/admin/menu/PricingCard";
import SaveItemButton from "../../components/admin/menu/SaveItemButton";
import { createItem } from "../../helpers/admin/createItem";
import { getCategories } from "../../helpers/admin/getCategories";
import type { CategoryOption } from "../../helpers/admin/getCategories";
import AdminLayout from "../../layouts/AdminLayout";
import { useNavigate } from "react-router";

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
      navigate("/adminmenu");
    }
  }

  return (
    <AdminLayout title="Add New Item" description="Create a new menu item">
      <div className="mt-2 bg-gray-50 px-5">
        {/* Item details */}
        <form onSubmit={handleSubmit} className="space-y-6 pb-5 pt-5">
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
    </AdminLayout>
  );
}
