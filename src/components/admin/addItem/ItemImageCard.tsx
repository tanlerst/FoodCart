
export default function ItemImageCard() {

    return (

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Item Image
            </h2> 

            <div className="grid grid-cols-3 gap-8">
                {/* Upload area*/}

                <label className="col-span-2 flex h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-400 bg-orange-50/30 text-center hover:bg-orange-50">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden">
                    </input>

                    <p className="font-semibold text-gray-800">
                        Upload Item Image
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Drag and drop an image here, or click to browse
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        Supports: JPG, PNG Max ?MB
                    </p>

                </label>

                {/* Guideline */}

                <div>
                    <h3 className="mb-4 font-semibold text-gray-800">
                        Image Guideline
                    </h3>

                    <ul className="list-disc space-y-3 pl-5 text-sm text-gray-600">
                        <li>Use high quality images</li>
                        <li>Recommended size: xxpxxxpx</li>
                        <li>Square images work best</li>

                    </ul>
                </div>
            </div>

        </div>
        
    );
}