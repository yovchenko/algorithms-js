module.exports = {
    goodVsEvil: (good, evil) => {
        let x,
            y,
            lenX,
            lenY,
            arrGood = [],
            arrEvil = [];
        arrGood = good.trim().split(' ');
        arrEvil = evil.trim().split(' ');
        good = 0;
        arrGood.forEach((el, index) => {
            switch (index) {
                case 0:
                    good += parseInt(el);
                    break;
                case 1:
                    good += 2 * parseInt(el);
                    break;
                case 2:
                    good += 3 * parseInt(el);
                    break;
                case 3:
                    good += 3 * parseInt(el);
                    break;
                case 4:
                    good += 4 * parseInt(el);
                    break;
                case 5:
                    good += 10 * parseInt(el);
                    break;
                default:
                    good = null;
            }
        });
        evil = 0;
        arrEvil.forEach((el, index) => {
            switch (index) {
                case 0:
                    evil += parseInt(el);
                    break;
                case 1:
                    evil += 2 * parseInt(el);
                    break;
                case 2:
                    evil += 2 * parseInt(el);
                    break;
                case 3:
                    evil += 2 * parseInt(el);
                    break;
                case 4:
                    evil += 3 * parseInt(el);
                    break;
                case 5:
                    evil += 5 * parseInt(el);
                    break;
                case 6:
                    evil += 10 * parseInt(el);
                    break;
                default:
                    evil = null;
            }
        });
        if (good > evil) {
            return "Battle Result: Good triumphs over Evil";
        } else if (good === evil) {
            return "Battle Result: No victor on this battle field";
        } else {
            return "Battle Result: Evil eradicates all trace of Good";
        }
    }
}
