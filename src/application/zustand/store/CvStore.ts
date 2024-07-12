import { create } from "zustand";
import {
  Template5Props,
  Experiencia,
  Education,
  TechSkills,
  Idiomas,
  Certificados,
  Info,
} from "../../dashboard/components/templates/interfaces-templates";

interface CvStore extends Template5Props {
  setTemplateSelected: (template: number) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setTitulo: (titulo: string) => void;
  setBio: (bio: string) => void;
  setExperiencia: (experiencia: Experiencia[]) => void;
  setEducation: (education: Education[]) => void;
  setTechSkills: (techSkills: TechSkills[]) => void;
  setSoftSkills: (softSkills: string[]) => void;
  setIdiomas: (idiomas: Idiomas[]) => void;
  setCertificados: (certificados: Certificados[]) => void;

  addInfo: (info: Info) => void;
  editInfo: (icon: string, dato: string) => void;
  removeInfo: (icon: string) => void;
}

export const useCvStore = create<CvStore>((set) => ({
  templateSelected: 0,
  name: "Olivia",
  lastName: "Wilson",
  titulo: "Lic. en comunicacion",
  bio: "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia.",
  personaInfo: [
    { icon: 'telephone', dato: '1257326' },
    { icon: 'address', dato: 'Calle Cualquiera 123, Cualquier Lugar' },
    { icon: 'github', dato: 'OliviaWilson' },
    { icon: 'linkedin', dato: 'OliviaWilson123' },
    { icon: 'portfolio', dato: 'PortfolioOlivia' },
    { icon: 'behance', dato: 'BehanceOlivia123' }
  ],
  techSkills: [
    { skill: "javascript", nivel: "intermedio" },
    { skill: "python", nivel: "basico" },
    { skill: "react", nivel: "avanzado" },
  ],
  education: [
    {
      instituto: "Universidad Increible",
      carrera: "Lic. en Administracion",
      nivel: "Terciario",
      anoStart: 2015,
      anoEnd: 2018,
    },
  ],
  experiencia: [
    {
      profesion: "Asistencia de Gerencia",
      empresa: "Empresa Increible",
      dateStart: "Agosto 2019",
      dateEnd: "Presente",
      descripcion: "Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.",
    },
  ],
  softSkills: [
    "liderazgo",
    "Iniciativa",
    "Inteligencia Emocional",
    "Comunicacion",
  ],
  idiomas: [
    { languaje: "espanol", nivel: "nativo" },
    { languaje: "ingles", nivel: "basico" },
  ],
  certificados: [
    {
      skill: "JavaScript Developer",
      entidadEmisora: "Udemy",
      ano: 2020,
    },
    {
      skill: "Python Developer",
      entidadEmisora: "Platzi",
      ano: 2022,
    },
  ],
  setTemplateSelected: (templateSelected: number) => set({templateSelected}), 
  setName: (name: string) => set({ name }),
  setLastName: (lastName: string) => set({ lastName }),
  setTitulo: (titulo: string) => set({ titulo }),
  setBio: (bio: string) => set({ bio }),
  setExperiencia: (experiencia: Experiencia[]) => set({ experiencia }),
  setEducation: (education: Education[]) => set({ education }),
  setTechSkills: (techSkills: TechSkills[]) => set({ techSkills }),
  setSoftSkills: (softSkills: string[]) => set({ softSkills }),
  setIdiomas: (idiomas: Idiomas[]) => set({ idiomas }),
  setCertificados: (certificados: Certificados[]) => set({ certificados }),

  addInfo: (info: Info) =>
    set((state) => ({ personaInfo: [...(state.personaInfo ?? []), info] })),
  editInfo: (icon: string, dato: string) =>
    set((state) => ({
      personaInfo: (state.personaInfo ?? []).map((info) =>
        info.icon === icon ? { ...info, dato } : info
      ),
    })),
  removeInfo: (icon: string) =>
    set((state) => ({
      personaInfo: (state.personaInfo ?? []).filter((info) => info.icon !== icon),
    }))
}));