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
    title.innerText = "Loading..."

    const chosenShow = await fetchShow();

    if (chosenShow?.data.title_english ?? editTitle()) {
        title.innerText = chosenShow?.data.title_english;
    }
}



const button = document.getElementById('randomize');

button.addEventListener('click', editTitle);

