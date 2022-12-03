import { useState } from "react";

export function useMultiForm(forms) {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  function nextForm() {
    setCurrentFormIndex((i) => {
      if (i >= forms.length - 1) return i;
      return i + 1;
    });
  }

  function prevForm() {
    setCurrentFormIndex((i) => {
      if (i === 0) return i;
      return i - 1;
    });
  }

  return {
    currentFormIndex,
    form : forms[currentFormIndex],
    nextForm,
    prevForm,
    isLastForm: currentFormIndex !== forms.length-1
  };
}
