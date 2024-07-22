import React, { useState } from 'react';

interface User {
    experienceYears: number;
    country: string;
    city: string;
    name: string;
    email: string;
    position: string;
    status: string;
}

const UsersTable: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null); 
    const [users] = useState<User[]>([
        { name: 'Neil Sims', email: 'neil.sims@flowbite.com', position: 'React Developer', status: 'Online', experienceYears: 0, country: '', city: '' },
        { name: 'Bonnie Green', email: 'bonnie@flowbite.com', position: 'Designer', status: 'Online', experienceYears: 0, country: '', city: '' },
        { name: 'Jese Leos', email: 'jese@flowbite.com', position: 'Vue JS Developer', status: 'Online', experienceYears: 0, country: '', city: '' },
        { name: 'Thomas Lean', email: 'thomas@flowbite.com', position: 'UI/UX Engineer', status: 'Online', experienceYears: 0, country: '', city: '' },
        { name: 'Leslie Livingston', email: 'leslie@flowbite.com', position: 'SEO Specialist', status: 'Offline', experienceYears: 0, country: '', city: '' },
        { name: "James Martinez", email: "james@flowbite.com", position: "UX Designer", status: "Online", experienceYears: 3, country: "USA", city: "Houston" },
        { name: "Amelia Peterson", email: "amelia@flowbite.com", position: "DevOps Engineer", status: "Online", experienceYears: 5, country: "Canada", city: "Ottawa" },
        { name: "William Scott", email: "william@flowbite.com", position: "Data Engineer", status: "Online", experienceYears: 6, country: "USA", city: "Denver" },
        { name: "Charlotte Clark", email: "charlotte@flowbite.com", position: "Software Developer", status: "Offline", experienceYears: 4, country: "Germany", city: "Hamburg" },
        { name: "Benjamin King", email: "benjamin@flowbite.com", position: "Frontend Developer", status: "Online", experienceYears: 3, country: "USA", city: "Portland" },
        { name: "Mia Green", email: "mia@flowbite.com", position: "Backend Developer", status: "Online", experienceYears: 7, country: "USA", city: "Philadelphia" },
        { name: "Jacob Walker", email: "jacob@flowbite.com", position: "Fullstack Developer", status: "Online", experienceYears: 4, country: "Canada", city: "Calgary" },
    ]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectFilter = (filter: string) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false); 
    };

    let filteredUsers = users;
    if (selectedFilter === 'Posicion') {
        filteredUsers = users.filter(user => user.position.toLowerCase().includes(''));
    } else if (selectedFilter === 'Antiguedad') {
        filteredUsers = users.filter(user => user.experienceYears >= 3);
    } else if (selectedFilter === 'Ubicacion') {
        filteredUsers = users.filter(user => user.country === '' && user.city === '');
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-8">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
                <div>
                    <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        className="inline-flex items-center text-black bg-[#94B9FF] focus:outline-none hover:bg-[#6882B4]  font-medium rounded-lg text-sm px-3 py-1.5"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">Filtrar</span>
                        Filtrar
                        <svg
                            className={`w-2.5 h-2.5 ms-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdownAction"
                        className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                    >
                        <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => selectFilter('Posicion')}>
                                    Posicion
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => selectFilter('Antiguedad')}>
                                    Antiguedad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => selectFilter('Ubicacion')}>
                                    Ubicacion
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search-users"
                        className="block pt-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder=""
                    />
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Candidato
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Posicion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CV
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="p-4 w-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-${index}`}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor={`checkbox-table-${index}`} className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/50?img=${index + 1}`} alt={user.name} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {user.name}
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{user.position}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className={`text-sm font-medium ${user.status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>
                                    {user.status}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-blue-600 hover:underline">
                                    Edit user
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
