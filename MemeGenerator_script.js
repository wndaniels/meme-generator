const memeBody = document.querySelector('#meme-form-body')
const imgUrl = document.querySelector('#img-url')
const topText = document.querySelector('#top-text')
const bottomText = document.querySelector('#bottom-text')
const generateBtn = document.querySelector('#generate-button');
const memeOutput = document.querySelector('#meme-output')

memeBody.addEventListener('submit', function (e) {
    e.preventDefault();
    const newMeme = document.createElement('div');
    newMeme.setAttribute('id', 'new-meme');
    const newMemeImg = document.createElement('div');
    newMemeImg.setAttribute('id', 'new-meme-img');
    const newTopText = document.createElement('div');
    newTopText.setAttribute('id', 'new-top-text');
    const newBottomText = document.createElement('div');
    newBottomText.setAttribute('id', 'new-bottom-text');
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '&times;'
    deleteBtn.setAttribute('id', 'delete-btn')
    newMemeImg.innerHTML = '<img src="' + document.getElementById('img-url').value + '" alt="" style="max-height: 350px;"/>';
    newTopText.innerText = topText.value;
    newBottomText.innerText = bottomText.value;
    memeBody.reset();
    memeOutput.appendChild(newMeme);
    newMeme.appendChild(newTopText);
    newMeme.appendChild(newMemeImg);
    newMeme.appendChild(newBottomText);
    newMeme.append(deleteBtn)
});

memeOutput.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});

