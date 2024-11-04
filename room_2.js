{

    const initiateRoom = () => {
        const $morse = document.querySelector('#r2_m');
        $morse.style.display = 'none';

        console.log('🤖 Are you smart enough to solve me?');
    }

    const handleCaesar = () => {
        console.log('-----------------');
        console.log('🤖 wkh_dqvzhu_lv_vhyhq');
        console.log('-----------------');
    }

    const revealMorse = () => {
        const $morse = document.querySelector('#r2_m');
        $morse.style.display = 'block';
    }

    const init = () => {
        const $button = document.querySelector('#r2_ps');
        $button.addEventListener('click', handleCaesar);
        $button.addEventListener('click', revealMorse);
        initiateRoom();
    }

    init();
}