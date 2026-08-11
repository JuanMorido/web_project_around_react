import { useState } from 'react';
import type { PopupConfig, CardData } from '../../types/types';
import Popup from './Popup/Popup';
import NewCard from './Popup/NewCard/NewCard';
import EditProfile from './Popup/EditProfile/EditProfile';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import ImagePopup from './Popup/ImagePopup/ImagePopup';
import Card from './Card/Card';
import avatar from '../../images/avatar.jpg';

const cards: CardData[] = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

export default function Main(): React.JSX.Element {
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const newCardPopup: PopupConfig = { title: 'Nuevo lugar', children: <NewCard /> };
  const editProfilePopup: PopupConfig = { title: 'Editar perfil', children: <EditProfile /> };
  const editAvatarPopup: PopupConfig = { title: 'Cambiar foto de perfil', children: <EditAvatar /> };

  function handleOpenPopup(popup: PopupConfig): void {
    setPopup(popup);
  }

  function handleClosePopup(): void {
    setPopup(null);
  }

  function handleCardImageClick(card: CardData): void {
    const imagePopup: PopupConfig = { children: <ImagePopup card={card} /> };
    handleOpenPopup(imagePopup);
  }

  return (
    <main className='content'>
      <section className='profile page__section'>
        <div className='profile__avatar-container'>
          <img className='profile__image' src={avatar} alt='Avatar' />
          <button
            aria-label='Cambiar foto de perfil'
            className='profile__avatar-edit'
            type='button'
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>Jacques Cousteau</h1>
          <button
            aria-label='Editar perfil'
            className='profile__edit-button'
            type='button'
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className='profile__description'>Explorador</p>
        </div>
        <button
          aria-label='Agregar tarjeta'
          className='profile__add-button'
          type='button'
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className='cards page__section'>
        <ul className='cards__list'>
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleCardImageClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
