 let score = 0;
        let clickPower = 1000;
        let cost = 1;
        let rebcst = 1;
        const scoreDisplay = document.getElementById('score');
        const powerDisplay = document.getElementById('power');
        const rebithDisplay = document.getElementById('rebcost')

        const clickBtn = document.getElementById('clickBtn');
        const buyBtn = document.getElementById('buyBtn');
        const resetBtn = document.getElementById('resetBtn');

        const costpricee = document.getElementById('costprice');
        const abobabtn = document.getElementById('rebirth')

        clickBtn.addEventListener('click', () => {
            score += clickPower;
            if (Math.random() < 1 / 300) {
                clickPower += 1;
                powerDisplay.textContent = clickPower;
                alert('Lucky click! +1 power click');
            }
            scoreDisplay.textContent = score;
        });



        buyBtn.addEventListener('click', () => {

            const buypower = 500 * cost;

            if (score >= buypower) {
                score -= buypower;
                clickPower += 1;
                cost += 2;
                scoreDisplay.textContent = score;
                powerDisplay.textContent = clickPower;
                costpricee.textContent = 500 * cost;
            } else {
                alert('Need ' + buypower + ' points to buy +1 power.');
            }
        });

        resetBtn.addEventListener('click', () => {
            score = 0;
            clickPower = 1;
            scoreDisplay.textContent = score;
            powerDisplay.textContent = clickPower;

        });


        abobabtn.addEventListener('click', () => {
            const rebth = 10000 * rebcst;
            if (score >= rebth && clickPower >= 10) {
                score -= rebth;
                clickPower = 1;
                rebcst += 1;
                scoreDisplay.textContent = score;
                powerDisplay.textContent = clickPower;
                rebithDisplay.textContent = 10000 * rebcst;
            }
        });