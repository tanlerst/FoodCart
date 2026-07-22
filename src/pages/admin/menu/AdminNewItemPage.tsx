import ItemForm from "../../../components/admin/menu/ItemForm";
import AdminLayout from "../../../layouts/AdminLayout";
import type { ItemFormSubmitData } from "../../../components/admin/menu/ItemForm";
import { createItem } from "../../../helpers/admin/createItem";
import { useNavigate } from "react-router";
import type { itemDetails } from "../../../helpers/admin/createItem";

export default function AdminNewItemPage() {
  const navigate = useNavigate();
  async function handleSubmit(data: ItemFormSubmitData) {
    try {
      await createItem(data as any as itemDetails);
      alert("Item created successfully.");
      navigate("/adminmenu");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to create item.");
    }
  }

  return (
    <AdminLayout title="Add New Item" description="Create a new menu item">
      <div className="mt-2 bg-gray-50 px-5">
        <ItemForm mode="create" onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
}
