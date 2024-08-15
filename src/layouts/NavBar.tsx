import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import logo from "/home/godlord/al/hack/public/mono.jpg";
import { ThemeContext } from "../context/theme";

const Navbar: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const [enabled, setEnabled] = useState(() => {
        const storedState = localStorage.getItem('themeSwitchState');
        return storedState ? JSON.parse(storedState) : true;
    });

    useEffect(() => {
        setEnabled(theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        setEnabled(newTheme === 'dark');
        localStorage.setItem('themeSwitchState', JSON.stringify(newTheme === 'dark'));
    };

    const itemRenderer = (item: any) => (
        <Link to={item.to} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            to: '/',
            template: itemRenderer
        },
        {
            label: 'Alumni',
            icon: 'pi pi-users',
            to: '/alumni-database',
            template: itemRenderer
        },
        {
            label: 'Mentorship',
            icon: 'pi pi-user-plus',
            to: '/mentorship',
            template: itemRenderer
        },
        {
            label: 'Events',
            icon: 'pi pi-calendar',
            to: '/events',
            template: itemRenderer
        },
        {
            label: 'More',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Discussion Forums',
                    icon: 'pi pi-fw pi-comments',
                    to: '/forums',
                    template: itemRenderer
                },
                {
                    label: 'AI Assistant',
                    icon: 'pi pi-fw pi-robot',
                    to: '/ai-assistant',
                    template: itemRenderer
                },
                {
                    label: 'Alumni Database',
                    icon: 'pi pi-fw pi-database',
                    to: '/alumni-database',
                    template: itemRenderer
                },
                {
                    label: 'Career Guidance',
                    icon: 'pi pi-fw pi-compass',
                    to: '/career-guidance',
                    template: itemRenderer
                }
            ]
        }
    ];

    const start = (
        <Link to="/">
            <img 
                alt="Technical Education Dept, Govt. of Rajasthan" 
                src={logo} 
                height="2" 
                style={{ width: '3rem' }}
                className="mr-2"
            />
        </Link>
    );

    const end = (
        <div className="flex align-items-center gap-2">
            
            <button
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-blue-500 text-white hover:bg-blue-400'} transition duration-300`}
                />
            <Avatar image="/path-to-default-avatar.png" shape="circle" />  
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Navbar;
