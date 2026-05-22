 let score = 0;
        let clickPower = 1;
        const scoreDisplay = document.getElementById('score');
        const powerDisplay = document.getElementById('power');
        const clickBtn = document.getElementById('clickBtn');
        const buyBtn = document.getElementById('buyBtn');
        const resetBtn = document.getElementById('resetBtn');

        clickBtn.addEventListener('click', () => {
            score += clickPower;
            if (Math.random() < 1 / 200) {
                score += 300;
                alert('Lucky click! +300 points!');
            }
            scoreDisplay.textContent = score;
        });

        buyBtn.addEventListener('click', () => {
            if (score >= 500) {
                score -= 500;
                clickPower += 1;
                scoreDisplay.textContent = score;
                powerDisplay.textContent = clickPower;
            } else {
                alert('Need 500 points to buy +1 power.');
            }
        });

        resetBtn.addEventListener('click', () => {
            score = 0;
            clickPower = 1;
            scoreDisplay.textContent = score;
            powerDisplay.textContent = clickPower;
        });