import Image from "next/image";
import { Message } from "primereact/message";
export default function FeedbackForm({ formData, setFormData, errors, onSubmit,loading }: any) {
  

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) =>
        ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRatingChange = (rating: number) => {
        setFormData((prevData: any) => ({ ...prevData, rating }));
    };


    return (
        <div className="min-h-screen flex items-center justify-center p-4">

            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT SIDE IMAGE */}
                <div className="bg-blue-200 flex items-center justify-center p-10">
                    <Image
                        src="/Image1.png"
                        alt="feedback"
                        width={350}
                        height={400}
                        loading="eager"
                        className="w-auto h-auto"
                    />
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="p-6">

                    <h1 className="text-2xl font-bold text-slate-800 mb-1">
                        Feedback Form
                    </h1>
                    <p className="text-slate-500 mb-6">
                        We value your feedback
                    </p>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="text-sm font-medium text-slate-700 flex gap-1">
                            Full Name
                             <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            placeholder="Enter your name"
                            className="w-full mt-2 border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-200 outline-none"
                            onChange={handleInputChange}
                        />
                         {errors.fullName && (
                                <p className="text-red-500 text-sm">
                                    {errors.fullName}
                                </p>
                            )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-sm font-medium text-slate-700 flex gap-1">
                            Email
                             <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            className="w-full mt-2 border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-200 outline-none"
                            onChange={handleInputChange}
                        />
                        {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email}
                                </p>
                            )}
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                        <label className="text-sm font-medium text-slate-700 flex gap-1">
                            Rating
                             <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2 text-2xl text-slate-300 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`cursor-pointer transition ${formData.rating > i ? 'text-yellow-400' : 'text-slate-300'}`}
                                    onClick={() => handleRatingChange(i + 1)}
                                >
                                    ★
                                </span>
                            ))}
                            {errors.rating && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.rating}
                                </p>
                            )} 
                        </div>
                       
                    </div>

                    {/* Experience */}
                    <div className="mb-4">
                        <label className="text-sm font-medium text-slate-700 flex gap-1">
                            Experience
                             <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-700">
                            {["Excellent", "Good", "Average", "Poor"].map((e) => (
                                <label key={e} className="flex items-center gap-2">
                                    <input type="radio" name="experience" className="accent-indigo-400" onChange={handleInputChange} value={e}checked={formData.experience === e}/>
                                    {e}
                                </label>
                            ))}
                            
                        </div>
                        {errors.experience && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.experience}
                                </p>
                            )}
                    </div>

                    {/* Message */}
                    <div className="mb-5">
                        <label className="text-sm font-medium text-slate-700">
                            Feedback Message
                        </label>
                        <textarea
                            rows={3}
                            name="message"
                            value={formData.message}
                            placeholder="Write your feedback..."
                            className="w-full mt-2 border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-200 outline-none resize-none"
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Small Elegant Button */}
                    <button className="bg-blue-700 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition" onClick={onSubmit} disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                </div>
            </div>
        </div>
    );
}