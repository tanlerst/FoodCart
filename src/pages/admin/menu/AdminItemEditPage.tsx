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
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  };

//   useEffect(() => {
//     async function loadCategories() {
//       try {
//         const data = await getCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingCategories(false);
//       }
//     }

//     loadCategories();
//   }, []);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!name.trim() || !categoryId || !price.trim() || !image || !time) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const parsedPrice = Number(price);
//     if (Number.isNaN(parsedPrice)) {
//       alert("Please enter a valid price.");
//       return;
//     }

//     const parsedTime = Number(time);
//     if (Number.isNaN(parsedTime)) {
//       alert("Please enter a valid time.");
//       return;
//     }

//     try {
//       setSubmitting(true);

//       await createItem({
//         name: name.trim(),
//         description: description.trim(),
//         price: parsedPrice,
//         category: Number(categoryId),
//         image,
//         time: parsedTime,
//       });

//       alert("Item created successfully.");
//     } catch (error) {
//       alert(error instanceof Error ? error.message : "Failed to create item.");
//     } finally {
//       setSubmitting(false);
//       navigate("/adminmenu");
//     }
//   }
  
  function handleSaveItem() {
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
          }}
          onSubmit={handleSaveItem}
        />
      </div>
    </AdminLayout>
  );
}