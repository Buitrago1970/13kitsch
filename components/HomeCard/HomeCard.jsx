// import React from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import Link from "next/link";

// function HomeCard() {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(
//         "http://localhost:1337/api/collections?populate=*"
//       );
//       setCollections(response.data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <section className="h-screen w-full">
//       <ul>
//         {collections.data &&
//           collections.data.map((collection) => (
//             <li key={collection.id}>
//               <div className="min-h-[75%] w-full relative">
//                 {/* <Image
//                   // src="https://balenciaga.dam.kering.com/m/4f130129f6cc026b/Large-26_New_Design_Balcom_HP_and_Balcon-HP_Mobile_PR_Winter22Campaign_2600x1300px_-ratio_200-_No_Logo_5.jpg"
//                   // src={`http://localhost:1337/${collection[0].attributes.coverImage.data[0].attributes.formats.large.url}`}
//                   alt="test"
//                   objectFit="cover"
//                   layout="fill"
//                 /> */}
//                 <img src="https://balenciaga.dam.kering.com/m/4f130129f6cc026b/Large-26_New_Design_Balcom_HP_and_Balcon-HP_Mobile_PR_Winter22Campaign_2600x1300px_-ratio_200-_No_Logo_5.jpg" />
//               </div>
//               <div className="h-1/4 flex flex-col items-center border-t border-black  p-6">
//                 <p className="text-4xl font-semibold mb-6 uppercase">
//                   {collection.attributes.name}
//                 </p>
//                 <Link
//                   href="/collection/[id]"
//                   as={`/collection/${collection.id}`}
//                 >
//                   <button className="w-96 h-11 border-black border rounded-md">
//                     SHOP NOW
//                   </button>
//                 </Link>
//               </div>
//             </li>
//           ))}
//       </ul>
//     </section>
//   );
// }

// export default HomeCard;
