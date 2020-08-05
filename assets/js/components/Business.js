Vue.component('Business', {
    template: //html
    `
    <section class="business py-5">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 col-sm-12">
                    <span class="d-flex justify-content-center align-items-center flex-md-row flex-sm-column">
                        <img src="./assets/img/icons/business-outline.svg" width="50" class="pb-2">
                        <h1 data-aos="zoom-in">{{ title }}</h1>
                    </span>
                    <p data-aos="zoom-in" data-aos-delay="200" class="my-3 text-center">My total investment <strong>{{ totalInvestment }}</strong> TRX</p>
                    <p data-aos="zoom-in" data-aos-delay="400" class="text-center">Total dividends so far <strong>{{ totalDividens }}</strong> TRX</p>
                    <div class="d-flex justify-content-center">
                        <button data-aos="zoom-in" data-aos-delay="600" class="btn px-5 py-3 my-4">
                            invest now
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up-right" data-aos-delay="200" class="col-md-6 col-sm-12">
                    <img src="./assets/img/widget-right.png" width="100%">
                </div>
            </div>
        </div>
    </section>
    `,
    data(){
        return {
            title: 'My investments',
            totalInvestment: '0.00',
            totalDividens: '0.00'


        }
    }
})