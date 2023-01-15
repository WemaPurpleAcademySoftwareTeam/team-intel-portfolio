import MemberCard from "./MemberCard";
import members from "../members";


function createMemberCard(members) {
  return (
    <MemberCard
      key={members.id}
      alt={members.alt}
      title={members.title}
      image={members.image}
      name={members.name}
      bio={members.bio}
    />
  );
}

function About() {
  return (
    <div className="mt-10 w-full my-auto text-center ">
      <h1 className="font-questrial text-4xl mb-4 ">Meet the team 👋</h1>
      
        <div className="flex flex-co flex-wrap space-y-10 md:space-y-0 justify-evenly">
            {members.map(createMemberCard)}
        </div>
      
    </div>
  );
}

export default About;
