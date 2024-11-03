const getDate = () => {
    // Get the current timestamp
    const timestamp = Date.now();

    // Convert it to a Date object
    const date = new Date(timestamp);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();

    // Format the date as "YYYY-MM-DD" (or any format you prefer)
    const formattedDate = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}-${year}`;
    return formattedDate;

}


export default getDate;