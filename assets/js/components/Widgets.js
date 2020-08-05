Vue.component('Widgets', {
    template: //html
        `
    <section class="widgets py-5 mb-3">
        <div class="container">
            <div class="row">
                <div data-aos="fade-up-right" v-for="widget in widgets" class="card col-md-4 col-sm-12 text-center d-flex flex-column align-items-center mt-5">
                    <img class="img-fluid" :src="'./assets/img/widgets/first-section/widget-1-'+widget.img+'.png'" width="166px">
                    <h6 class="py-2 mt-3"> {{ widget.title }} </h6>
                    <p>
                       {{ widget.text }}
                    </p>
                </div>


                <div data-aos="fade-up-right" v-for="(widget, index) in widgets2" class="card col-md-3 col-sm-12 text-center d-flex flex-column align-items-center mt-5">
                    <img :class="['img-fluid', index % 2 == 0 ? 'mt-5': '']" :src="'./assets/img/widgets/second-section/widget-'+widget.img+'.png'" width="166px">
                    <h6 class="py-2 mt-3"> {{ widget.title }} </h6>
                    <p>
                       {{ widget.text }}
                    </p>
                </div>
            </div>
        </div>

        
    </section>
    `,
    data() {
        return {
            widgets: [
                {
                    img: '1',
                    title: 'Safe and reliable project',
                    text: 'Bank of TRON runs automatically on the blockchain and its smart contract is uploaded to the TRON blockchain. No one is able to edit or delete the smart contract, nor influence its autonomous operation. The dividends are also automatically paid through the smart contract.'
                },
                {
                    img: '2',
                    title: 'Dividend distribute',
                    text: 'Bank of TRON smart contract generates 3.7-6.7% dividends per day based on your investment and distribute your dividends to your balance. For example, if you invest in the 4.7% plan, then you will get over 100% of your first deposit in 21 days. The dividends generate every second and you can withdraw or reinvest your dividends each second. When you reinvest, the total investment would increase and you will get more dividends.'
                },
                {
                    img: '3',
                    title: 'Referral program',
                    text: 'Bank of TRON smart contract set 3 tiers of referral rewards, which are 5%, 2%, and 0.5% respectively. Moreover, the invitee can also get 0.5% of his/her own investment as rewards. The referral rewards are distributed to your balance automatically and you can withdraw at anytime.'
                }
            ],
            widgets2: [
                { 
                    img: '1',
                    title: 'How to invest on desktop?',
                    text: 'You can install the TronLink or TronPay extension on Chrome. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, login on TronLink or TronPay to browse this website and invest.'
                },
                { 
                    img: '2',
                    title: 'How to invest on mobile?',
                    text: 'You can download Banko Wallet、Math Wallet or TronWallet app from application store. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, find Bank of TRON within the wallet app or browse our site with the browser in the app, and then go to invest or withdraw.'
                },
                { 
                    img: '3',
                    title: 'How is the fund distributed?',
                    text: 'Technical support: 3% Marketing: 3% Referral: 5%-2%-0.5% Invitee: 0.5%'
                },
                { 
                    img: '4',
                    title: 'What is the referral program?',
                    text: 'Bank of TRON smart contract set 3 tiers of referral rewards, which are 5%, 2%, and 0.5% respectively. Moreover, the invitee can also get 0.5% of his/her own investment as rewards. The referral rewards are distributed to your balance automatically and you can withdraw at anytime.'
                },
            ]
        }
    }
})