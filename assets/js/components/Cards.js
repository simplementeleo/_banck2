Vue.component('Cards', {
    template: //html 
        `
    <section class="cards py-4">
        <div class="container">
            <div class="row">
                <div  data-aos="fade-right" v-for="(card, index) in cards" class="col-md-3 col-sm-12 d-flex justify-content-center">
                    <div :class="['card', 'card-'+index, 'py-5', 'px-3', 'mt-5']">
                        <p class="text-center text-plan">{{ card.plan }}</p>
                        <p class="text-center">[ <span class="px-3 text-daily">{{ card.daily }}</span> ]</p>
                        <div class="d-flex justify-content-center py-4">
                            <div class="circle py-4 px-3 rounded-circle">
                                <h1>{{ card.percentej }}%</h1>
                            </div>
                        </div>
                        <ul>
                            <li>{{ card.firstPoint }}</li>
                            <li><strong>{{ card.secondPoint }}</strong></li>
                            <li> Total return <strong>{{ card.thirdPoint }}</strong> </li>
                            <li>{{ card.fourPoint }}</li>
                        </ul>
                        <div class="input-group my-3 px-4">
                            <input type="text" class="form-control" placeholder="0" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <span class="input-group-text text-daily" id="basic-addon2">TRX</span>
                            </div>
                        </div>
                        <p class="text-center text-daily">{{ card.textFee }}</p>
                        <button class="btn btn-primary rounded-pill first-button mt-4">
                            invest
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    `,
    data() {
        return {
            cards: [{
                    plan: 'Platinum Plan',
                    daily: 'Daily ROI',
                    percentej: '3.7',
                    firstPoint: 'Dividends every second',
                    secondPoint: 'Forever',
                    thirdPoint: `∞`,
                    fourPoint: 'Min. investment is 10 TRX',
                    textFee: 'You should have ~2.5 TRX more for the transaction fee'
                },
                {
                    plan: 'Platinum Plan',
                    daily: 'Daily ROI',
                    percentej: '4.7',
                    firstPoint: 'Dividends every second',
                    secondPoint: '45 days',
                    thirdPoint: `211.5%`,
                    fourPoint: 'Min. investment is 10 TRX',
                    textFee: 'You should have ~2.5 TRX more for the transaction fee'
                },
                {
                    plan: 'Platinum Plan',
                    daily: 'Daily ROI',
                    percentej: '5.7',
                    firstPoint: 'Dividends every second',
                    secondPoint: '25 days',
                    thirdPoint: `142.5%`,
                    fourPoint: 'Min. investment is 10 TRX',
                    textFee: 'You should have ~2.5 TRX more for the transaction fee'
                },
                {
                    plan: 'Platinum Plan',
                    daily: 'Daily ROI',
                    percentej: '6.7',
                    firstPoint: 'Dividends every second',
                    secondPoint: '18 days',
                    thirdPoint: `120.6%`,
                    fourPoint: 'Min. investment is 10 TRX',
                    textFee: 'You should have ~2.5 TRX more for the transaction fee'
                },

            ]
        }
    }
})