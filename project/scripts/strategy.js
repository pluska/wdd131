function setupOpeningsGallery() {
    const openings = [
        {
            name: 'Queen’s Gambit',
            image: 'images/icon-queen.svg',
            moves: ['1. d4 d5', '2. c4 e6', '3. Nc3 Nf6']
        },
        {
            name: 'Italian Game',
            image: 'images/icon-bishop.svg',
            moves: ['1. e4 e5', '2. Nf3 Nc6', '3. Bc4 Bc5']
        },
        {
            name: 'Sicilian Defense',
            image: 'images/icon-pawn.svg',
            moves: ['1. e4 c5', '2. Nf3 d6', '3. d4 cxd4']
        },
        {
            name: 'Ruy Lopez',
            image: 'images/icon-king.svg',
            moves: ['1. e4 e5', '2. Nf3 Nc6', '3. Bb5 a6']
        },
        {
            name: 'French Defense',
            image: 'images/icon-rook.svg',
            moves: ['1. e4 e6', '2. d4 d5', '3. Nc3 Nf6']
        }
    ];

    const subtitle = document.getElementById('gallery-subtitle');
    const mainImg = document.getElementById('gallery-main-img');
    const movesList = document.getElementById('gallery-moves');
    const thumbs = document.querySelectorAll('.thumb');

    if (!mainImg || !movesList || thumbs.length === 0) {
        return;
    }

    function showOpening(index) {
        const opening = openings[index];
        if (!opening) {
            return;
        }

        if (subtitle) {
            subtitle.textContent = `${opening.name}`;
        }

        mainImg.src = opening.image;
        mainImg.alt = `Illustration of the ${opening.name} opening`;

        movesList.innerHTML = opening.moves
            .map((move) => `<li>${move}</li>`)
            .join('');

        thumbs.forEach((thumb) => {
            if (Number(thumb.dataset.index) === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            showOpening(Number(thumb.dataset.index));
        });
    });

    showOpening(0);
}

setupOpeningsGallery();
