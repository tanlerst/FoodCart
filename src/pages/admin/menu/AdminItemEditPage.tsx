import ItemForm, { type ItemFormSubmitData } from "../../../components/admin/menu/ItemForm";
import AdminLayout from "../../../layouts/AdminLayout";
import { Navigate, useLocation, useNavigate } from "react-router";
import type { FoodItem } from "../../../types/food";
import { useEffect, useState } from "react";
import { readRestrictions } from "../../../helpers/admin/readRestrictions";
import { editItem } from "../../../helpers/admin/editItem";

type itemState = {
  item: FoodItem;
};

export default function AdminEditItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as itemState | undefined;
  const [dietaryPreferences, setDietaryPreferences] = useState<number[] | null>(null);

  if (!state?.item) {
    return <Navigate to="/adminmenu" replace />;
  }

  const item = state.item;

  useEffect(() => {
    async function loadPreferences() {
      const ids = await readRestrictions(item.id);
      setDietaryPreferences(ids);
    }
    loadPreferences();
  }, [item.id]);

  async function handleSubmit(data: ItemFormSubmitData) {
    try {
      await editItem({
        id: item.id,
        ...data,
      });
      navigate("/adminmenu");
    } catch (error) {
      console.log(error);
      alert(error instanceof Error ? error.message : "Failed to edit item.");
    }
  }

  if (dietaryPreferences === null) {
    return <div className="p-8">Loading...</div>;
  }
  return (
    <AdminLayout title="Edit Item" description="Update this menu item">
      <div className="mt-2 bg-gray-50 px-5">
        <ItemForm
          mode="edit"
          existingImageUrl={item.image}
          initialValues={{
            name: item.name,
            description: item.description,
            categoryId: String(item.categoryId),
            price: String(item.price),
            time: String(item.time),
            availability: item.isAvailable ? "available" : "unavailable",
            recommended: item.isRecommended,
            dietaryPreferences: dietaryPreferences,
          }}
          onSubmit={handleSubmit}
        />
      </div>
    </AdminLayout>
  );
}
