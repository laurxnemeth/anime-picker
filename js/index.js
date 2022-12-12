const fetchShow = () => {
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


    title.innerText = chosenShow?.data.title_japanese;
}

editTitle();

