// pages/redirectedPage.tsx
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RedirectedPage() {
  const router = useRouter();

  useEffect(() => {
    // Fetch usertype information from API
    axios.get('/api/users/usertoken')
      .then(response => {
        const usertype = response.data.userType;
        console.log(usertype);
        const isfarmer = (usertype === 'Farmer')
        if (isfarmer) {
          router.push('/farmer')
        } 
        else{
          router.push('/trader')
        }
         
      })
      .catch(error => {
        console.error('Error fetching userType:', error);
        
        router.push('/');
      });
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
      {/* Optionally, you can add a loader or message while redirecting */}
    </div>
  );
}
