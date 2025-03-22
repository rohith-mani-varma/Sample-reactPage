
let teamMembers = [
    {
        name: "John Doe",
        role: "Director",
        image: "/images/user1.jpg",
      },
      {
        name: "Mike Doe",
        role: "Senior Designer",
        image: "/images/user2.jpg",
      },
      {
        name: "Jane Doe",
        role: "Senior Designer",
        image: "/images/user3.jpg",
      },
      {
        name: "Karen Doe",
        role: "Project Manager",
        image: "/images/user4.jpg",
      },
];

export default function Team(){
    return(
        <>
    <section className="text-center py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900">
        MEET THE TEAM
        <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
      </h2>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover mx-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
 
        </>
    );
}