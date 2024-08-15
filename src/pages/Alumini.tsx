import React from 'react';

interface Alumni {
    id: number;
    name: string;
    specialization: string;
    careerPath: string;
    contact: string;
}

const alumniData: Alumni[] = [
    { id: 1, name: 'John Doe', specialization: 'Computer Science', careerPath: 'Software Engineer at Google', contact: 'john.doe@gmail.com' },
    { id: 2, name: 'Jane Smith', specialization: 'Mechanical Engineering', careerPath: 'Product Manager at Tesla', contact: 'jane.smith@gmail.com' },
    { id: 3, name: 'Alice Johnson', specialization: 'Electrical Engineering', careerPath: 'Research Scientist at NASA', contact: 'alice.johnson@gmail.com' },
];

const Alumni = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Alumni Directory</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {alumniData.map((alumnus) => (
                    <li key={alumnus.id} className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">{alumnus.name}</h3>
                        <p>Specialization: {alumnus.specialization}</p>
                        <p>Career Path: {alumnus.careerPath}</p>
                        <p>Contact: {alumnus.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Alumni;
