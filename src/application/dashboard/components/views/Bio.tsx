import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import React from "react";

const Bio: React.FC = () => {
    const navigate = useNavigate();
    const { bio, setBio, name, setName, lastName, setLastName, titulo, setTitulo, personaInfo = [], addInfo, editInfo, removeInfo } = useCvStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        // Update corresponding state based on input name
        switch (name) {
            case "bio":
                setBio(value);
                break;
            case "titulo":
                setTitulo(value);
                break;
            case "name":
                setName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "linkedin":
            case "github":
            case "portfolio":
            case "behance":
            case "email":
            case "telephone":
            case "address":
                if (value) {
                    if (personaInfo.find(inf => inf.icon === name)) {
                        editInfo(name, value);
                    } else {
                        addInfo({ icon: name, dato: value });
                    }
                } else {
                    removeInfo(name);
                }
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        navigate("../experience");
    };

    return (
        <div className="font-lato flex flex-col ">
            <h2 className="text-xl text-zinc-700 mb-4">Carga tu información</h2>
            <div className=" bg-white">
                <form className="">
                    {/* Sección "Sobre mí" */}
                    <section className="space-y-3">
                        <h3 className="text-base text-zinc-800 mt-2">Sobre mí</h3>
                        <textarea
                            name="bio"
                            value={bio}
                            onChange={handleChange}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className="w-full h-24 p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none resize-none"
                        ></textarea>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Location"
                                onChange={handleChange}
                                value={personaInfo.find(loc => loc.icon === 'address')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="telephone"
                                name="telephone"
                                placeholder="Telefono"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'telephone')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'email')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                            <input
                                type="text"
                                value={titulo}
                                onChange={handleChange}
                                name="titulo"
                                placeholder="Título profesional"
                                className="w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                            />
                        </div>
                    </section>

                    {/* Sección "Redes Sociales" */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-semibold">Redes Sociales</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                id="github"
                                name="github"
                                placeholder="Github"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'github')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="linkedin"
                                name="linkedin"
                                placeholder="Linkedin"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'linkedin')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="portfolio"
                                name="portfolio"
                                placeholder="Portfolio"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'portfolio')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="behance"
                                name="behance"
                                placeholder="Behance"
                                onChange={handleChange}
                                value={personaInfo.find(inf => inf.icon === 'behance')?.dato || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </section>
                </form>
            </div>
            <NextButton
                onClick={handleNext}
                label="Guardar cambios y continuar"
            />
        </div>
    );
};

export default Bio;