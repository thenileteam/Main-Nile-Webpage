import { teams } from "../utils";
import { ScrollRevealComponent } from "../components";
const AboutTeam = () => {
  return (
    <ScrollRevealComponent>
      <section className="section-spacing">
        <div className="wrapper">
          <h2 className="section-headers text-center">The People Of Nile</h2>
          {/*  grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12 */}
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-14">
            {teams.map((team) => {
              const { id, img, name, position } = team;
              return (
                <div
                  className="relative w-60 md:w-auto mx-auto transitions hover:scale-110"
                  key={id}
                >
                  <img
                    src={img}
                    className="w-full object-cover rounded-xl h-full"
                    loading="lazy"
                    alt={`${name} image`}
                  />
                  <article className="bg-pry1 absolute bottom-2 z-10 w-52 lg:w-44 left-1/2 transform -translate-x-1/2 rounded-md text-center  ">
                    <h5 className="font-bold">{name}</h5>
                    <p>{position}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollRevealComponent>
  );
};

export default AboutTeam;
