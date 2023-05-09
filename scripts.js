var todos = [];

const handlingForms = {
    data() {
        return {
            itemList: {
                done:false,
                text:''
            },
            list: window.todos
        }
    },
    methods: {
        addItem: function () {
            this.list.push(this.itemList);
            this.itemList = {
                done:false,
                text:''
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');