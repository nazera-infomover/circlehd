'use client';
import { useState } from "react";
import { validateForm } from "./utils/validation";
import { Message } from 'primereact/message';
import { submitFeedback } from "./utils/mockApi";
import FeedbackForm from "./components/feedback/FeedbackForm";
import SummaryScreen from "./components/summary/Summary";

export default function App() {

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const[formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: 0,
    comments: ""
  });

  const handleSubmit = async () => {
    setLoading(true);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const response: any = await submitFeedback();

    setLoading(false);
    if (response?.error) {
      setErrors({ submit: response?.message || response?.error });
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log("Form is valid ✅");
  };
  
  return(
    <div className="bg-slate-100 min-h-screen flex items-center justify-center ">
      {submitted?(
      <SummaryScreen formData={formData}/>):(
      <FeedbackForm formData={formData} setFormData={setFormData} errors={errors} onSubmit={handleSubmit} loading={loading}  />)}
    </div>
  )
}