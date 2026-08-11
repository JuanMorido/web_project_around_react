export default function EditAvatar(): React.JSX.Element {
  return (
    <form className='popup__form' id='avatar-form' name='avatar-form'>
      <label className='popup__field'>
        <input
          className='popup__input popup__input_type_url'
          id='avatar'
          name='avatar'
          placeholder='Enlace a la imagen'
          required
          type='url'
        />
        <span className='popup__error' id='avatar-error'></span>
      </label>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}
