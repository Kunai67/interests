async function customSubmit (data, fetchURL) {
    let form = new FormData();

    for (let [key, value] of Object.entries(data)) {
        form.append(key, value);
    }

    const response = await fetch(fetchURL, {
        method: 'POST',
        mode: 'cors',
        body: form
    });

    const result = await response.text();
    return result;
}

export default customSubmit;