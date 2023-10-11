import React from 'react';
import ProfileComponent from './Profile';

export default function Header() {
   return (
      <header className="header__page page">
         <div className="header__container container">
            <div className="header__body body">
               <div className="header__content">
                  <div className="header__content-title">
                     <h1 className="header__content-title-h">
                        Awesome Kanban Board
                     </h1>
                  </div>
                  <div className="header__content-profile">
                     <ProfileComponent />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}