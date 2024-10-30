export const openModal = (modalId: string): void => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  };
  
  export const closeModal = (modalId: string): void => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };
  
  export const initializeModalControls = (): void => {
    document.getElementById('openModalButton')?.addEventListener('click', () => openModal('myModal'));
    document.getElementById('closeModalButton')?.addEventListener('click', () => closeModal('myModal'));
  }