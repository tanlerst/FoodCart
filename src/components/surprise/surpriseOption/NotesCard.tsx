/**
 *  @file NotesCard.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the notes card component for the surprise option page. 
 *                It displays a card with an optional message from the user.
 */

type NotesCardProps = {
  notes: string;
  setNotes: (notes: string) => void;
};

const MAX_NOTES_LENGTH = 100; 

export default function NotesCard({ notes, setNotes }: NotesCardProps) {

    return (
        <section className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md">
            
            <h2 className="text-lg font-semibold mb-2">
                Add Notes
                <span className="text-xs text-gray-500"> (Optional)</span>
            </h2>

            <div className="relative w-full">
                <textarea
                    value={notes}
                    maxLength={MAX_NOTES_LENGTH}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add your notes here..."
                    className="min-h-20 w-full border border-gray-200 rounded-xl outline-none focus:border-orange-500 placeholder-gray-400 p-2 text-gray-700"
                />

                <div className="mt-5">
                    <span className="absolute bottom-1 right-1 text-xs text-gray-500">
                        {notes.length}/{MAX_NOTES_LENGTH}
                    </span>
                </div>
            </div>
        </section>

    );

}