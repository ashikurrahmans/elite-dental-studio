// {
//   services.map((service) => (
//     <div className="my-6 border-2 py-8 shadow-xl" key={service.id}>
//       <div className=" flex flex-col items-center content-center text-black border-solid md:flex-row ">
//         <div className="max-w-3xl relative bg-no-repeat md:w-1/2">
//           <img
//             alt={service.Servicetitle}
//             src={service.serviceImg}
//             className=""
//           />
//         </div>

//         <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-20 md:order-none pl-8 pb-8 lg:ml-24 md:ml-10">
//           <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-6xl md:text-2xl">
//             {service.Servicetitle}
//           </h2>
//           <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-2xl lg:mt-6">
//             Build an atmosphere that creates productivity in your organization
//             and your company culture.Build an atmosphere that creates
//             productivity in your organization and your company culture.
//           </p>
//           <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
//             {service.iconDescription.map((item) => (
//               <li className="my-2 lg:my-4 lg:text-2xl">
//                 <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
//                   <span className="text-sm font-bold">✓</span>
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//           <div className="lg:p-4">
//             <Link className="btn btn-sm mt-4" to={`${service.id}`}>
//               Know More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));
// }
