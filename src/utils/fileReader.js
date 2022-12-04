

export const fileReader = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    return new Promise(async (resolve, conflict) => {
        reader.onload = (readerEvent) => {
            resolve(readerEvent?.target?.result)
        };  
    })
  };