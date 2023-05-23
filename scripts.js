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
                localStorage.setItem("list", JSON.stringify(this.list))
            }else{
                alert('To-do text is required');
            }
        },
        clear: function () {
            this.list = [];
        },
        storeTodos: function () {
            localStorage.setItem("list", JSON.stringify(this.list));
        }
    },
    created() {
        this.list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : this.list;
    }
};

Vue.createApp(handlingForms).mount('#app');