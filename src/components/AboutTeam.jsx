import {teams} from '../utils'
const AboutTeam = () => {
  return (
    <section className="section-spacing">
      <h2 className="section-headers text-center">Our Leadership Team</h2>
      <div className="grid-container grid gap-6 lg:grid-cols-4 mt-14">
        {teams.map((team) => {
          const {id, img, name, position } = team;
          return (
            // w-65 before
            <div className='relative w-60 lg:w-65 mx-auto transitions hover:scale-110' key={id}>
              <img src={img}  className='w-full' alt="" />
              <article className='bg-pry1 absolute bottom-2 w-52 lg:w-44 left-1/2 transform -translate-x-1/2 rounded-md text-center'>
                <h5 className='font-bold'>{name}</h5>
                <p>{position}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutTeam;
