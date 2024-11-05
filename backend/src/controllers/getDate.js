function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0'); // Days are 1-based

    return `${year}-${month}-${day}`;
}

export default getDate;