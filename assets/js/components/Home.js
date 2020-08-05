Vue.component('Home',{
    template: //html
    `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
            <a class="navbar-brand pl-3" href="#">
                <img src="./assets/img/logo.png" width="130" alt="Bank Of Tron">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <img src="./assets/img/icons/menu.png" width="50px"> 
            </button>

            <div :class="['collapse', 'navbar-collapse']" id="navbarSupportedContent">

                <ul class="navbar-nav white-text ml-auto">
                    <li v-for="item in items" class="nav-item">
                        <a class="nav-link text-white" :href="item.url">{{ item.name }}</a>
                    </li>
                </ul>


                <ul class="navbar-nav ml-auto pr-3">
                    <li v-for="(item, index) in itemsRight" class="nav-item">
                        <a class="nav-link text-white" :href="item.url">
                            <img :src="'./assets/img/icons/'+item.img" width="27px">
                            <span v-if="index == 2" class="px-2">US</span>
                        </a>
                    </li>
                </ul>


            </div>
        </nav>


        <div class="container">
            <div class="row justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center align-items-center">
                <div class="title text-white mt-5 pr-3">
                    <h1 data-aos="fade-up-right">Get 3.7% - 6.7% <br> per day!</h1>
                    <p data-aos="fade-up-right" data-aos-delay="200" class="py-4">{{ text }}</p>
                    <div class="d-flex justify-content-center justify-content-lg-start justify-content-sm-center ">
                        <button data-aos="fade-up-right" data-aos-delay="200" href="#" class="btn text-white px-4 py-2">
                            invest now
                            <img src="./assets/img/icons/arrow-right.svg" width="30">
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </header>
    `,
    data(){
        return {
            isActive: false,
            items: [
                { name: 'Home', url: '#' },
                { name: 'About', url: '#' },
                { name: 'CONTRACT [TRONSCAN]', url: '#' },
            ],
            text: 'Decentralized & Secure Smart Contract Fund.',
            button: 'invest now',
            itemsRight: [
                { href: '#', img: 'paper-plane-outline.svg' },
                { href: '#', img: 'chatbubble-ellipses-outline.svg' },
                { href: '#', img: 'flag-us.png' },
            ]

        }
    }
})