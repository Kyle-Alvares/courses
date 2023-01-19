const getIsSetup = () => localStorage.getItem('isSetup');
const setIsSetup = (isSetup) => localStorage.setItem('isSetup', isSetup);

const getName = () => localStorage.getItem('name');
// const setName = (name) => localStorage.setItem('name', name);

const getEmail = () => localStorage.getItem('email');
// const setEmail = (email) => localStorage.setItem('email', email);


export {
    getIsSetup,
    setIsSetup,
    getName,
    getEmail,
}