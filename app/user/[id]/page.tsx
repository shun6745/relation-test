"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//--------------看一下老师的API和·Link--------------------

// interface Post {
//   id: number;
//   title: string;
//   content: string;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   posts: Post[];
// }
// //明日get やってみる

// const UserDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (id) {
//       fetchUserDetails();
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   const fetchUserDetails = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/user/${id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch user details');
//       }

//       const data: User = await response.json();
//       setUser(data);
//     } catch (error) {
//       // setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <div>User not found</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
//       <p>{user.email}</p>
//       <h2 className="text-xl font-bold mt-4">Posts</h2>
//       <ul>
//         {user.posts.map((post) => (
//           <li key={post.id} className="mb-2">
//             <h3 className="font-bold">{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDetail;