import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className='bg-gray-800 text-white p-6 mt-auto'> {/* mt-auto pushes footer to bottom */}
        <div className='container mx-auto text-center'>
        <p>&copy; {currentYear} StyleSphere. All rights reserved.</p>
        <p className='text-sm mt-2'>
           Designed with React & Tailwind CSS 
        </p>
        </div>
        </footer>
        
    );

}

export default Footer;