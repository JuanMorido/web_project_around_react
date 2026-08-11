export default function EditProfile(): React.JSX.Element {
  return (
    <form className='popup__form' id='edit-profile-form' name='edit-profile-form'>
      <label className='popup__field'>
        <input
          className='popup__input popup__input_type_name'
          id='name'
          minLength={2}
          maxLength={40}
          name='name'
          placeholder='Nombre'
          required
          type='text'
        />
        <span className='popup__error' id='name-error'></span>
      </label>
      <label className='popup__field'>
        <input
          className='popup__input popup__input_type_description'
          id='about'
          minLength={2}
          maxLength={200}
          name='about'
          placeholder='Acerca de mí'
          required
          type='text'
        />
        <span className='popup__error' id='about-error'></span>
      </label>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}
