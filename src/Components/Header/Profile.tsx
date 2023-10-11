import React from 'react';

interface MenuProfileLink {
   href: string;
   title: string;
}

const menuProfileLink: MenuProfileLink[] = [
   {
      href: '#',
      title: 'Profile',
   },
   {
      href: '#',
      title: 'Log Out',
   },
];

const ProfileComponent: React.FC = () => {
   const cardBlocks = menuProfileLink.map((item) => {
      return (
         <li className="profile__menu-content-paragraph" key={item.title}>
            <a href={item.href} className="profile__menu-content-link">
               {item.title}
            </a>
         </li>
      );
   });

   return (
      <>
         <div className="profile__image">
            <img src="" alt="avatar" className="profile__image-img" />
         </div>
         <div className="profile__menu">
            <div className="profile__menu-icon">
               <span></span>
            </div>
            <nav className="profile__menu-content">
               <ul className="profile__menu-content-list">
                  {cardBlocks}
               </ul>
            </nav>
         </div>
      </>
   );
};

export default ProfileComponent;