import { useEffect, useState } from "react"
import UpdateModal from './UpdateModal'


const UpdateModalContainer = () => {
    const [updateAvaliable, setUpdateAvaliable] = useState(false);
    
    
    const getUpdate = () => {
        const updateString = localStorage.getItem('version-update-needed');
        const update = JSON.parse(updateString);
        return update;
    }


    const setUpdate = (value) => {
      localStorage.setItem('version-update-needed', value)
    }
    const update = getUpdate();


  const closeModal = () => setUpdateAvaliable(false);


  const pageReload = () => {
    closeModal();
    setUpdate(false)
    window.location.reload()
  }

    useEffect(() => {
        if(update) {
            setUpdateAvaliable(true)
        }

    }, [update])

   return <UpdateModal updateAvaliable={updateAvaliable} closeModal={closeModal} pageReload={pageReload} />;

}

export default UpdateModalContainer;