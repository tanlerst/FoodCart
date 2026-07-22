import ItemForm from "../../../components/admin/menu/ItemForm";

import AdminLayout from "../../../layouts/AdminLayout";

export default function AdminEditItemPage() {
  // currently hard coding item data
  const item = {
    id: 1,
    name: "Cheese Pizza",
    description: "xxxxxxxxxxxxxxxxxxxxxxxx",
    categoryId: 2,
    price: 12.99,
    time: 15,
    availability: "available",
    recommended: true,
    dietaryPreferences: ["gluten-free"],
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  };

  function handleSubmit() {
    // update the value and navigate to admin menu page
  }

  return (
    <AdminLayout title="Edit Item" description="Update this menu item">
      <div className="mt-2 bg-gray-50 px-5">
        <ItemForm
          mode="edit"
          existingImageUrl={item.imageUrl}
          initialValues={{
            name: item.name,
            description: item.description,
            categoryId: String(item.categoryId),
            price: String(item.price),
            time: String(item.time),
            availability: item.availability,
            recommended: item.recommended,
            dietaryPreferences:[]
          }}
          onSubmit={handleSubmit}
        />
      </div>
    </AdminLayout>
  );
}
