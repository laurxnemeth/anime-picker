const fetchShow = async () => {
    try {
        const res = await fetch('https://api.jikan.moe/v4/random/anime');
        return res.json();
    } catch (err) {
        console.error(err);
    }
}

const editTitle = async () => {
    const title = document.getElementById('title');
    const chosenShow = await fetchShow();
    const titleLanguage = chosenShow?.data.title_english ? chosenShow?.data.title_english : chosenShow?.data.title_japanese;

    title.innerText = titleLanguage;
}

editTitle();

