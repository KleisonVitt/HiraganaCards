const card = document.querySelector('.card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const hiraganaList = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
const translationList = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n'];
let currentIndex = 0;

function updateCard() {
    const currentHiragana = hiraganaList[currentIndex];
    const frontFace = card.querySelector('.front_face p');
    const backFace = card.querySelector('.back_face p');
    if (card.classList.contains('is-flipped')) {
        backFace.textContent = translationList[currentIndex];
    } else {
        frontFace.textContent = currentHiragana;
        backFace.textContent = '';
    }
}

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
        card.classList.remove('is-flipped');
    }
});

nextButton.addEventListener('click', function () {
    if (currentIndex < hiraganaList.length - 1) {
        currentIndex++;
        card.classList.remove('is-flipped');
        updateCard();
    }
});


card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
    updateCard();
});

updateCard();
