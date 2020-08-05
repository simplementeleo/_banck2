Vue.component('Total', {
    template: //html
    `
    <section class="total-invested py-5">

        <div class="container">
            <div class="row justify-content-center">
                <div v-for="button in buttons" :href="button.url" class="col-md-3 col-sm-12">
                    <button data-aos="fade-right" class="btn rounded-pill py-2 mb-4">
                        {{ button.name }}
                    </button>
                </div>
                <h5  data-aos="fade-right" class="col-sm-12 text-center">{{ text }}</h5>
                <p  data-aos="fade-right" class="col-sm-12 numbers text-center mt-3">{{ invested }} TRX</p>
            </div>
        </div>


    </section>
    `,
    data(){
        return {
            buttons: [
                { name: 'NEW PROJECT[coming soon]', url: '#' },
                { name: 'TRX BANK', url: '#' },
                { name: 'BIT BANK', url: '#' },
                { name: 'ACE BANK[coming soon]', url: '#' },
            ],
            text: 'Total invested',
            invested: '348 490 268'
        }
    }
})