const handlingForms = {
    data() {
        return {
            itemList: {
                done: false,
                text: ''
            },
            list: []
        }
    },
    methods: {
        addItem: function () {
            if (this.itemList.text) {
                this.list.push(this.itemList);
                this.itemList = {
                    done: false,
                    text: ''
                }
            }
        },
        clear: function () {
            this.list = [];
        }
    }
};

Vue.createApp(handlingForms).mount('#app');