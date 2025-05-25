import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function PopupForm({ closePopup }) {
    return (
        <section className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-primary bg-opacity-50" onClick={closePopup}></div>
            <div className="bg-white rounded-lg px-5 py-10 md:p-8 shadow-2xl w-full max-w-lg z-10 relative">
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-primary hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary">
                    Get Your Free Proposal
                </h3>

                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                        >
                            Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Write your name or Your Company name"
                            className="w-full text-sm md:text-base text-primary p-3 md:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                        >
                            Subject
                        </label>
                        <Input
                            id="subject"
                            placeholder="Write your proposal subject"
                            className="w-full text-sm md:text-base p-3 md:p-5 border text-primary border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                        >
                            Description
                        </label>
                        <Textarea
                            id="description"
                            placeholder="Please write the details you want"
                            className="w-full text-sm md:text-base p-3 md:p-5 border text-primary border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            rows={4}
                        />
                    </div>

                    <Button variant={"link"} type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}
