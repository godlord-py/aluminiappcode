import React from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const eventsData: Event[] = [
    { id: 1, title: 'Alumni Meetup 2024', date: '2024-09-01', description: 'Reconnect with fellow alumni and network with industry leaders.' },
    { id: 2, title: 'Webinar on Emerging Technologies', date: '2024-10-15', description: 'Join us for a deep dive into the latest tech trends.' },
    { id: 3, title: 'Panel Discussion: Careers in AI', date: '2024-11-20', description: 'Industry experts discuss the future of AI and job opportunities.' },
];

const Events = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventsData.map((event) => (
                    <li key={event.id} className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
