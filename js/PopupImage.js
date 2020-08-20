class PopupImage extends Popup {
    constructor(container) {
      super(container);
    }
    open(link) {
      const popImage = this.popupClass.querySelector('.popup__image');
      popImage.setAttribute('src', link);
      super.open();
    }
  }
  