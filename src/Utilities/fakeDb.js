const addToLs = value => {
    value = value.substring(0, value.length - 1)
    localStorage.setItem('breakTime', value);

}

const getFromLs = () => {
    const storedValue = localStorage.getItem('breakTime');
    return storedValue;
}

export { addToLs, getFromLs };