const cleanText = (text) => {
    if (!text) return '';

    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;

    return textarea.value;
};

export default cleanText;