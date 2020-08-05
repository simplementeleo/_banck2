Vue.component('Referral',{
    template: //html 
    `
    <section class="referral py-5">
        <div class="container fluid">
            <div  data-aos="fade-up-right" class="card p-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <span class="d-flex flex-md-row flex-sm-column">
                            <img src="./assets/img/icons/cash-outline.svg" width="60" class="pr-3 pb-3">
                            <h1>Dividents</h1>
                        </span>
                        <div class="mb-3">
                            <p>Referral rewards</p>
                            <p><strong>0 TRX</strong></p>
                        </div>
                        <div class="mb-3">
                            <p>Withdrawable(referral rewards included)</p>
                            <p><strong>0.000000 TRX</strong></p>
                        </div>
                        <button class="btn rounded-pill mb-3 px-4 py-3">
                            withdraw
                        </button>

                        <p class="text-white">You should have 1-2 TRX for the transaction fee</p>
                        <p>My total investment <strong>0.00</strong> TRX</p>
                        <p>Total dividends so far <strong>0.00</strong> TRX</p>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <span class="d-flex flex-md-row flex-sm-column">
                            <img src="./assets/img/icons/people-outline.svg" width="60" class="pr-3 pb-3">
                            <h1>Referral Program</h1>
                        </span>
                        <p>Your referral link <a href="#">[COPY LINK]:</a> <br><strong>no link...</strong></p>
                        <p>You can get your referral link after investing.</p>
                        <p>1 referral （5% Referral rewards） <strong>- 0</strong></p>
                        <p>2 referral （2% Referral rewards) <strong>- 0</strong></p>
                        <p>3 referral （0.5% Referral rewards） <strong>- 0</strong></p>
                        <p>Invitee (0.5% of the investment)</p>
                        <p>Total referral rewards payout - <strong>0</strong> TRX</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
})