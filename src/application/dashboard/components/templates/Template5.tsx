import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template5: React.FC<Template5Props> = ({ name, lastName, bio, titulo, education, experiencia, personaInfo, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="bg-stone-50 outline outline-1 outline-stone-200">
     <section className="">
        <header>
          <h1 className="text-center tracking-wide text-5xl  border-b border-black">{name} {lastName}</h1>
          <h3 className="text-center text-xl tracking-widest ">{titulo}</h3>
        </header>
        <section className="flex gap-2 justify-center text-xs">
         {personaInfo && personaInfo.map(x => (
              <div key={x.dato} className="flex items-center gap-2">
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return <FaGithub />;
                    case 'linkedin':
                      return <FaLinkedin />;
                    case 'portfolio':
                      return <HiIdentification />;
                    case 'behance':
                      return <FaBehanceSquare />;
                    default:
                      return null;
                  }
                })()}
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return <p>{x.dato}</p>;
                    case 'linkedin':
                      return <p>{x.dato}</p>;
                    case 'portfolio':
                      return <p>{x.dato}</p>;
                    case 'behance':
                      return <p>{x.dato}</p>;
                    default:
                      return null;
                  }
                })()}
              </div>
            ))}
        </section>
        <section className="flex gap-5 justify-center text-xs">
          {idiomas && idiomas.map((x, i) => (
            <p key={i} >{x.languaje} - {x.nivel}</p>
          ))}
        </section>
        <section className="justify-center flex gap-12">
          <article style={{ minWidth: '18rem' }}>
            <header className="flex justify-start items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-black block"></span>
              <p className="text-3xl italic font-thin tracking-tighter">SOBRE MI</p>
            </header>
            <p className=" outline outline-1 outline-white">{bio}</p>
            <header className="flex justify-start items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-black block"></span>
              <p className="text-3xl italic font-thin tracking-tighter">CONTACTO</p>
            </header>
            <aside className="flex flex-col gap-5">
            {personaInfo && personaInfo.map(x => (
              <div key={x.icon} className="flex items-center gap-2">
                {(() => {
                  switch (x.icon) {
                    case 'email':
                      return <MdEmail />;
                    case 'telephone':
                      return <FaSquarePhone />;
                    case 'address':
                      return <FaLocationDot />;
                    default:
                      return null;
                  }
                })()}
                {(() => {
                  switch (x.icon) {
                    case 'telephone':
                      return <p>{x.dato}</p>;
                    case 'address':
                      return <p>{x.dato}</p>;
                    case 'email':
                      return <p>{x.dato}</p>;
                    default:
                      return null;
                  }
                })()}
              </div>
            ))}
            </aside>
            {education && education.length > 0 && (
              <header className=" flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin tracking-tighter">EDUCACION</p>
              </header>
            )}
            <section>
              {education && education.map(x => (
                <div key={x.instituto} className="">
                  <p className="font-bold">{x.instituto}  {x.nivel}</p>
                  <p className="italic">{x.carrera} {x.dateStart}  {x.dateEnd}</p>
                </div>
              ))}
            </section>
            {softSkills && softSkills.length > 0 && (
              <header className="flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">SOFT SKILLS</p>
              </header>
            )}
            <section>
              {softSkills && softSkills.map(x => (
                <li key={x}>{x}</li>
              ))}
            </section>
          </article>
          <article style={{ minWidth: '18rem' }}>
            {experiencia && experiencia.length > 0 && (
              <header className="flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">EXPERIENCIA</p>
              </header>
            )}
            <section className={`${experiencia && experiencia.length > 0 ? '' : ''}`}>
              {experiencia && experiencia.map((x, i) => (
                <div key={i} className="">
                  <h3 className="text-lg font-semibold">{x.profesion}</h3>
                  <p className="font-semibold">{x.empresa}</p>
                  <span className="font-thin italic">{x.dateStart}  -  {x.dateEnd}</span>
                  <p className="text-sm">{x.descripcion}</p>
                </div>
              ))}
            </section>
            {techSkills && techSkills.length > 0 && (
              <header className=" flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">TECH SKILLS</p>
              </header>
            )}
            <section>
              {techSkills && techSkills.map(x => (
                <li key={x.skill}>{x.skill} - {x.nivel}</li>
              ))}
            </section>
            {certificados && certificados.length > 0 && (
              <header className="flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">CERTIFICADOS</p>
              </header>
            )}
            <section>
              {certificados && certificados.map((x, i) => (
                <li key={i} className="">
                  <p className="inline font-bold italic">{x.skill}</p>
                  <p className=" italic">{x.entidadEmisora}  {x.ano}</p>
                </li>
              ))}
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Template5