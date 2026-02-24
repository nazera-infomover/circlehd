export default function SummaryScreen({ formData }: any) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Feedback Summary
      </h2>

      <div className="space-y-3 text-slate-700">
        <p><strong>Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Rating:</strong> {formData.rating} ⭐</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
}