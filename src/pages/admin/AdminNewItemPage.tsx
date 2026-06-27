/* Admin New Item Page for adding new food items to the menu */

import InformationCard from "../../components/admin/addItem/InformationCard";
import ItemImageCard from "../../components/admin/addItem/ItemImageCard";
import PricingCard from "../../components/admin/addItem/PricingCard";
import SaveItemButton from "../../components/admin/addItem/SaveItemButton";
import CancelButton from "../../components/admin/addItem/CancelButton";
import AdminSideBar from "../../components/admin/AdminSideBar";

export default function AdminNewItemPage() {
  // Change here
  const handleCancel = null;
  const handleSubmit = null;

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
        <form className="space-y-6">
          <InformationCard></InformationCard>

          <PricingCard></PricingCard>

          <ItemImageCard></ItemImageCard>

          {/* Save and cancel buttons */}
          <div className="flex justify-end gap-4 pb-1">
            <CancelButton>
              {/* <CancelButton */}
              {/* onCancel={handleCancel}> */}
            </CancelButton>

            <SaveItemButton></SaveItemButton>
          </div>
        </form>
      </div>
    </div>
  );
}
