type ImageProps = {
  image: File | null;
  onImageChange: (file: File | null) => void;
  existingImageUrl?: string | null; // only in edit mode
};

export default function ItemImageCard({ image, onImageChange, existingImageUrl }: ImageProps) {
  const previewUrl = image ? URL.createObjectURL(image) : null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Item Image</h2>

      <div className="grid grid-cols-3 gap-8">
        {/* Current image (only in edit mode) */}
        {existingImageUrl && (
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">Current Image</h3>
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-gray-200">
              <img
                src={existingImageUrl}
                alt="Current item"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Upload new image*/}
        <div className={existingImageUrl ? "" : "col-span-2"}>
          <h3 className="mb-3 text-sm font-medium text-gray-700">
            {existingImageUrl ? (
              <>
                Upload New Image<span className="text-gray-400"> (Optional)</span>
              </>
            ) : (
              <>
                Upload Item Image<span className="text-red-500">*</span>
              </>
            )}
          </h3>

          <label className="flex aspect-square w-full max-w-xs cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-orange-400 bg-orange-50 text-center hover:bg-orange-50">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(x) => onImageChange(x.target.files?.[0] ?? null)}
            />

            {/* If previewUrl is set then show preview */}
            {previewUrl ? (
              <img src={previewUrl} alt="Item preview" className="h-full w-full object-cover" />
            ) : (
              <>
                <p className="font-semibold text-gray-800">Upload Item Image</p>
                <p className="mt-2 text-sm text-gray-500">
                  Click to browse
                </p>
                <p className="mt-1 text-sm text-gray-500">Supports: JPG, PNG</p>
              </>
            )}
          </label>
        </div>

        {/* Guideline */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-800">Image Guideline</h3>

          <ul className="list-disc space-y-3 pl-5 text-sm text-gray-600">
            <li>Use high quality images</li>
            <li>Square images work best</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
