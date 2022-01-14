new Vue ({
    el: '#app',

    data: {
        
        images: [
            {
                name: 'Water tower',
                image: 'https://randomwordgenerator.com/img/picture-generator/5fe6d6404c50b10ff3d8992cc12c30771037dbf85254784a742d78d4904c_640.jpg',
            },
            {
                name: 'Frog',
                image: 'https://randomwordgenerator.com/img/picture-generator/frog-540812_640.jpg',
            },
            {
                name:  'Tree eye',
                image: 'https://randomwordgenerator.com/img/picture-generator/57e8d1404f5bab14f1dc8460962e33791c3ad6e04e507441722978d69f48c6_640.jpg',
            },
            {
                name: 'Scenery',
                image: 'https://randomwordgenerator.com/img/picture-generator/54e1d1444f56ac14f1dc8460962e33791c3ad6e04e507441722a72dc9e44c1_640.jpg',
            },
            {
                name: 'Psycho',
                image: 'https://randomwordgenerator.com/img/picture-generator/55e1d2434f54a414f1dc8460962e33791c3ad6e04e50744172287ad29f4cc2_640.jpg',
            },
        ],

        currentIndex: 0,

    },

    methods: {

        nextImage: function () {
            this.currentIndex++;
            if(this.currentIndex > this.images.length - 1) {
                this.currentIndex = 0;
            };
        },

        previousImage: function () {
            this.currentIndex--;
            if(this.currentIndex < 0) {
                this.currentIndex = this.images.length - 1;
            };
        },
    
    },

});