import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/functions';

const useEmailSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (formData: any) => {
    setLoading(true);
    try {
      const sendEmailFunction = firebase.functions().httpsCallable('sendEmail');

      await sendEmailFunction(formData);
      console.log('Email sent successfully');
      setError(null);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Error sending email');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendEmail };
};

export default useEmailSubmission;