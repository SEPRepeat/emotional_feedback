const reaction = document.getElementById('reaction');

const emotions = {
  joy: {
    color: '#ffe066',
    text: 'Ну тоже верно, всё замечательно! 😊'
  },
  sad: {
    color: '#4682B4',
    text: 'Дед инсайдство не в мете, всё будет хорошо! 💙'
  },
  angry: {
    color: '#ff6b6b',
    text: 'Просыпайся, Самурай. Время сжечь этот город! 🔥'
  },
  calm: {
    color: '#00FFFF',
    text: 'Главное - не усни 🧘‍♂️'
  },
  wow: {
    color: '#d0bfff',
    text: 'Ничего себе! Ты нажал на все кнопки! 🤯'
  }
};

document.getElementById('buttons').addEventListener('click', (e) => {
  const mood = e.target.dataset.emotion;
  if (mood && emotions[mood]) {
    document.body.style.backgroundColor = emotions[mood].color;
    reaction.textContent = emotions[mood].text;
  }
});