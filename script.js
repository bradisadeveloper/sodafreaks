const sP = document.querySelectorAll('.socialProof');
const speed = 200;

sP.forEach(socialProof => {
    const updateSocialProof = () => {
        const target = +socialProof.getAttribute('data-target');
        const count = +socialProof.innerText;

        const increment = target / speed;

        if(count < target) {
          socialProof.innerText = count + increment;
          setTimeout(updateSocialProof, 1);
        } else {
            count.innerText = target;
        }
    }

    updateSocialProof();
});